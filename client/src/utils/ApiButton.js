import React from "react";

export default function ApiButton({ onClick, text, btnid }) {
  return (
    <button
      className="btn btn-info m-2"
      type="button"
      onClick={onClick}
      id={btnid}
    >
      {text}
    </button>
  );
}
