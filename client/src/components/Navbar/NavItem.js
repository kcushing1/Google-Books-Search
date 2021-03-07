import React from "react";

export default function NavItem({ name, href }) {
  return (
    <>
      <li className="nav-item ">
        <a className="nav-link" href={href}>
          {name}
        </a>
      </li>
    </>
  );
}
