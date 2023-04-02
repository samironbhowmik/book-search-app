import React from "react";
import { Link } from "react-router-dom";
import "../components/landing.css"
function Landing() {
  return (
    <div>
      <div className="landing-container">
        <div className="top">
            <p><strong>Book</strong> Search</p>
        </div>
        <div className="left">
        <h1>Find your favourite book, manga, novel</h1>
        <p>
          Explore, search and read books for free from any place in the world!
        </p>
        <Link to="/booksearch">
          <button>Explore</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
