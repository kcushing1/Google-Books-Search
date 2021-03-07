import React from "react";
import ApiButton from "../utils/ApiButton";
import Button from "../utils/Button";
import ViewButton from "../utils/ViewButton";

export default function Book({
  title,
  author,
  image,
  description,
  href,
  btntext,
  onClick,
}) {
  return (
    <div className="row border">
      <div className="col">
        <div className="row">
          <div className="col text-left">
            <h3>{title}</h3>
            <p>{author}</p>
          </div>
          <div className="col text-right">
            <ViewButton href={href} />
            <ApiButton onClick={onClick} text={btntext} />
          </div>
        </div>
        <div className="row">
          <div className="col text-left">
            <img src={image} alt={title} />
          </div>
          <div className="col text-left">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
