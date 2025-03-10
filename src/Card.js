import React from "react";
import { Link } from "react-router-dom";
import AboutMovie from './AboutMovie.js';
import './Card.css';

function Card({ img, title, description, movieData, fullDescription = false }) {
  const safeDescription = description ? description : "No description available";
  return (
    <div className="Box">
      <div className="Card">
        <Link to="/AboutMovie"
        state={{movie: movieData}}
          className="nav-link">
          <img src={img} alt={title} />
        </Link>
        <div className="card-content">
          <h2>{title}</h2>
          <p className="description">{fullDescription ? description : `${description.substring(0, 100)}...`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;