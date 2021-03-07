import React from "react";
import ApiButton from "../utils/ApiButton";
import ViewButton from "../utils/ViewButton";

export default function Book({
  title,
  author,
  image,
  description,
  href,
  btntext,
  onClick,
  btnid,
}) {
  return (
    <div className="row border">
      <div className="col">
        <div className="row">
          <div className="col text-left">
            <h3>{title}</h3>
            <p>Written by {author}</p>
          </div>
          <div className="col text-right">
            <ViewButton href={href} />
            <ApiButton onClick={onClick} text={btntext} btnid={btnid} />
          </div>
        </div>
        <div className="row">
          <div className="col-4 text-left m-3">
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
