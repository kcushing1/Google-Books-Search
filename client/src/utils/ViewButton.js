import React from "react";

export default function ViewButton({ href }) {
  return (
    <a href={href}>
      <button className="btn btn-info m-2">View</button>
    </a>
  );
}
