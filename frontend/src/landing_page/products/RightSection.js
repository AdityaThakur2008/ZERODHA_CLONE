import React from "react";

function RightSection({ title, description, link, linkName, image }) {
  return (
    <div className="container mt-5 p-5">
      <div className="row mt-5 ">
        <div className="col pt-5" style={{ marginRight: "3rem" }}>
          {" "}
          <h1 className="h4 mb-4">{title}</h1>
          <p className=" me-5 pe-5">{description}</p>
          <a href={link} className="text-decoration-none">
            {linkName} →
          </a>
        </div>
        <div className="col">
          <img
            src={image}
            alt="img"
            className=" me-5"
            style={{ width: "90%", scale: "130%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
