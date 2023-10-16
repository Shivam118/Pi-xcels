import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/movies");
      const payload = await response.json();
      setMovies(payload.data);
    }
    getData();
  }, []);
  return (
    <div className="Home">
      <header className="header">Let's Say Movies!!</header>
      <section className="cardSection">
        {movies.map((movie) => (
          <Link to={`details/${movie.id}`} key={movie.id} className="cardLink">
            <div className="card">
              <h3 className="title">{movie.title}</h3>
              <h4 className="tagline">{movie.tagline}</h4>
              <p className="avg">
                Ratings:
                <span style={{ fontStyle: "italic" }}>
                  {movie.vote_average}/10
                </span>
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Homepage;
