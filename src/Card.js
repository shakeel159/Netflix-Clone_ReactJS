import React from "react";
import { Link } from "react-router-dom";
import AboutMovie from './AboutMovie.js';

function Card({ img, title, description }) {
  return (
    <div className="Box">
      <div className="Card">
        <Link to="/AboutMovie" className="nav-link">
          <img src={img} alt={title} />
        </Link>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;