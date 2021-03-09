import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ name, href }) {
  return (
    <>
      <li className="nav-item ">
        <Link className="nav-link" to={href}>
          {name}
        </Link>
      </li>
    </>
  );
}
