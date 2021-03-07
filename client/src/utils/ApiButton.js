import React from "react";

export default function ApiButton({ onClick, text }) {
  return (
    <button className="btn btn-info m-2" type="button" onClick={onClick}>
      {text}
    </button>
  );
}
