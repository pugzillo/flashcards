import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ links }) {
  /*
  Takes in array of objects that is used to create links in Breadcrumb nav menu; Already includes Home.
  */
  const linkList = links.map((link, index) => (
    <li className="breadcrumb-item active" aria-current="page" key={(index+1).toString()}>
      <Link to={links.dir}>{link.label}</Link>
    </li>
  ));
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" key="0">
            <Link to="/">
              <span className="oi oi-home"></span>
              Home
            </Link>
          </li>
          {linkList}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
