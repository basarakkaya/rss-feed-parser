import React from "react";
import "./RSSItem.css";

export default function RSSItem({ item }) {
  return (
    <div className="item-container">
      <a
        href={item.link[0]}
        target="__blank"
        rel="noreferrer noopener"
        className="item-link"
      >
        <p className="item-title">{item.title[0]}</p>
        <p className="item-creator">Creator: {item["dc:creator"][0]}</p>
      </a>
    </div>
  );
}
