import React from "react";
import "./card1.css";
export default function card1() {
  return (
    <>
      <a href="#" class="card card1">
        <img
          src="https://images.unsplash.com/photo-1526297003708-f5a1c2c9c6e7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI0OTY1ODM&ixlib=rb-1.2.1&q=80"
          alt="balloon with an emoji face"
          class="card__img"
        />
        <span class="card__footer">
          <span>Awesome speedy card</span>
        </span>
        <span class="card__action">
          <svg viewBox="0 0 448 512" title="play">
            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
          </svg>
        </span>
      </a>
    </>
  );
}
