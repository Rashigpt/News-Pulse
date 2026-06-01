import React from "react";
import image from "./assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light border-0 h-100"  // fixed typo 'hadow-sm', added h-100 for equal height cards
      style={{
        borderRadius: "15px",
        transition: "transform 0.3s, box-shadow 0.3s",
        // removed fixed width — now controlled by col grid
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
        style={{ height: "200px", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
        alt="news"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-warning fw-bold">
          {title ? title.slice(0, 50) : "No Title"}
        </h5>
        <p className="card-text text-secondary flex-grow-1">
          {description ? description.slice(0, 90) : "No description available."}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer"
          className="btn btn-primary mt-auto"  // mt-auto pushes button to bottom
          style={{ background: "linear-gradient(90deg, #ff8a00, #e52e71)", border: "none" }}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;