import React from "react";

export default function Button({ href, text }) {
  return (
    <a href={href}>
      <button className="btn btn-info m-2">{text}</button>
    </a>
  );
}
