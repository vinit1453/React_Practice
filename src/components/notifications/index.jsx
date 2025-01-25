import React, { useState, useEffect } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

export default function Notifictions() {
  const [stompClient, setStompClient] = useState(null); // Store the Stomp client instance
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [res, setRes] = useState("");
  const [adminId, setAdminId] = useState("");
  const [subscriptionUrl, setSubscriptionUrl] = useState(
    "http://localhost:8081/vin"
  );
  useEffect(() => {
    // Clean up the connection when the component unmounts
    return () => {
      if (stompClient) {
        stompClient.disconnect(() => {
          console.log("Disconnected");
        });
      }
    };
  }, [stompClient]);

  function addUser(userId) {
    setUsers((prev) => [...prev, userId]);
  }

  const connectToWebSocket1 = () => {
    if (!subscriptionUrl) {
      alert("Please enter a valid subscription URL");
      return;
    }

    const socket = new SockJS(subscriptionUrl); // Connect to the WebSocket
    const stompClient = Stomp.over(socket);

    stompClient.connect({ Authorization: `Bearer ${token}` }, (frame) => {
      console.log("Connected: " + frame);

      // Subscribe to the notifications (e.g., private or public)
      stompClient.subscribe("/private/user/message", (message) => {
        // console.log("Private Notification: " + message.body);
        setRes((prev) => [...prev, message.body]);
      });

      stompClient.subscribe("/private/user/message/" + adminId, (message) => {
        // console.log("Private Notification: " + message.body);
        setRes((prev) => [...prev, message.body]);
      });
      stompClient.subscribe("/topic/message", (message) => {
        // console.log("Broadcast Message: " + message.body);
        setRes((prev) => [...prev, message.body]);
      });
    });

    setStompClient(stompClient); // Save the connected Stomp client
  };

  function handleSendToAll() {
    if (stompClient && message) {
      stompClient.send("/vn/all", {}, JSON.stringify({ text: message }));
    } else {
      alert("Please connect to WebSocket and enter a message.");
    }
  }

  function hableSendToPrivate() {
    if (stompClient && message && users) {
      stompClient.send(
        "/vn/users/private",
        {},
        JSON.stringify({
          to: users,
          message: message,
        })
      );
    } else {
      alert("Please connect to WebSocket, enter a user, and message.");
    }
  }
  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Jwt token"
            onChange={(e) => setToken(e.target.value)}
          />
          <input
            type="text"
            placeholder="admin userId"
            onChange={(e) => setAdminId(e.target.value)}
          />
          <input
            type="text"
            id="text1"
            placeholder="userIds"
            onChange={(e) => addUser(e.target.value)}
          />
          <span id="usersList">{users && users}</span>
        </div>
        <hr />
        <div>
          <input
            type="text"
            id="text"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <br />
        <div>
          <button onClick={() => connectToWebSocket1()}>Connect</button>

          <button id="sendMessage" onClick={() => handleSendToAll()}>
            Send To All
          </button>
          <button id="sendPrivateMessage" onClick={() => hableSendToPrivate()}>
            Send Private
          </button>
        </div>
      </div>
      <hr />
      <h3>Response</h3>
      {res ? res.toString() : "No response"}
    </div>
  );
}
