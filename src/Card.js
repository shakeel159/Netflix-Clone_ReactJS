import React from "react";
import { Link } from "react-router-dom";
import AboutMovie from './AboutMovie.js';

function Card({ img, title, description, movieData, fullDescription = false }) {
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