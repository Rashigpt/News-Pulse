import React from "react";

import image from "./assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-4 d-inline-block hadow-sm border-0 my-3 mx-3 px-2 py-2"
      style={{
        width: "18rem",
        borderRadius: "15px",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
        e.currentTarget.style.boxShadow = "0 0 25px rgba(255,255,255,0.2)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 0 10px rgba(255,255,255,0.1)";
      }}
    >
      <img
        src={src ? src : image}
        className="card-img-top img-fluid"
        style={{ height: "200px", objectFit: "cover", borderRadius: "12px" }}
        alt="news"
      />

      <div className="card-body">
        <h5 className="card-title text-warning fw-bold">
          {title ? title.slice(0, 50) : "No Title"}
        </h5>
        <p className="card-text text-secondary">
          {description ? description.slice(0, 90) : "No description available."}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{
            background: "linear-gradient(90deg, #ff8a00, #e52e71)",
            border: "none",
          }}
        >
          Click To Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
