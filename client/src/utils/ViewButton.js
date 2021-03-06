import React from "react";

export default function ViewButton({ href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button className="btn btn-info m-2">View</button>
    </a>
  );
}
