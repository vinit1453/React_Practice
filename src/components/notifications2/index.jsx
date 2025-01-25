import React, { useState, useEffect } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const NotificationComponent2 = () => {
  const [stompClient, setStompClient] = useState(null); // Store the Stomp client instance
  const [subscriptionUrl, setSubscriptionUrl] = useState(
    "http://localhost:8081/vin"
  );
  const [publicMessage, setPublicMessage] = useState("");
  const [privateMessage, setPrivateMessage] = useState("");
  const [privateUser, setPrivateUser] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [token, setToken] = useState("");
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

  // Handle the WebSocket connection based on the subscription URL
  const connectToWebSocket = () => {
    if (!subscriptionUrl) {
      alert("Please enter a valid subscription URL");
      return;
    }

    const socket = new SockJS(subscriptionUrl); // Connect to the WebSocket
    const stompClient = Stomp.over(socket);

    stompClient.connect({ Authorization: `Bearer ${privateUser}` }, (frame) => {
      console.log("Connected: " + frame);

      // Subscribe to the notifications (e.g., private or public)
      stompClient.subscribe("/private/user/message", (message) => {
        // console.log("Private Notification: " + message.body);
        setNotifications((prev) => [...prev, message.body]);
      });

      stompClient.subscribe("/topic/message", (message) => {
        // console.log("Broadcast Message: " + message.body);
        setNotifications((prev) => [...prev, message.body]);
      });
    });

    setStompClient(stompClient); // Save the connected Stomp client
  };

  // Send a message to all users (broadcast)
  const sendPublicMessage = () => {
    if (stompClient && publicMessage) {
      stompClient.send("/vn/all", {}, JSON.stringify({ text: publicMessage }));
    } else {
      alert("Please connect to WebSocket and enter a message.");
    }
  };

  // Send a message to a specific user (private)
  const sendPrivateMessage = () => {
    if (stompClient && privateMessage && privateUser) {
      stompClient.send(
        "/vn/users",
        {},
        JSON.stringify({
          to: [
            "1478d27a-c43c-4cb1-b4b8-8156af62e763",
            "737400da-2dc3-488a-bc68-5f5dc37198d3",
          ],
          message: "ALL Notification",
        })
      );
    } else {
      alert("Please connect to WebSocket, enter a user, and message.");
    }
  };

  return (
    <div className="messages">
      <h2>WebSocket Notifications</h2>
      {/* Subscription URL */}
      <div className="m-2">
        <div className="m-2">
          <label>Login JWT: </label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter JWT to login"
          />
        </div>
        <div>
          <label>Subscription URL: </label>
          <input
            type="text"
            value={subscriptionUrl}
            onChange={(e) => setSubscriptionUrl(e.target.value)}
            placeholder="Enter WebSocket subscription URL"
          />
          <button onClick={connectToWebSocket}>Connect</button>
        </div>
      </div>
      <hr />
      {/* Send Public Message */}

      <div className="m-2">
        <label>Send All (Broadcast): </label>
        <input
          type="text"
          value={publicMessage}
          onChange={(e) => setPublicMessage(e.target.value)}
          placeholder="Enter message to send to all users"
        />
        <button onClick={sendPublicMessage}>Send to All</button>
      </div>

      {/* Send Private Message */}
      <div className="m-2">
        <br />
        <label>Send To User: </label>
        <input
          type="text"
          value={privateUser}
          onChange={(e) => setPrivateUser(e.target.value)}
          placeholder="Enter user JWT"
        />
        <input
          type="text"
          value={privateMessage}
          onChange={(e) => setPrivateMessage(e.target.value)}
          placeholder="Enter private message"
        />
        <button onClick={sendPrivateMessage}>Send Private</button>
      </div>

      <hr />
      <div id="messages">
        {notifications.length > 0 ? (
          <>
            <ul>
              {notifications.map((notification, index) => (
                <li key={index}>{notification}</li>
              ))}
            </ul>
          </>
        ) : (
          <>No Notification</>
        )}
      </div>
    </div>
  );
};

export default NotificationComponent2;
