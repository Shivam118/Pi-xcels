import React, { useState, useEffect } from "react";
import "./Details.css";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetch(`/api/movies/${id}`);
      const payload = await response.json();
      setMovieDetails(payload.data[0]);
    }
    getData();
  }, []);
  const getLocaleDate = (date) => {
    if (date) {
      let localDate = new Date();
      const dates = date.split("/");
      localDate.setDate(dates[0]);
      localDate.setMonth(dates[1]);
      localDate.setYear(dates[2]);
      return localDate.toDateString();
    }
  };
  return (
    <div className="Details">
      <header className="header">{movieDetails.title}</header>
      <section className="fullDesc">
        <Link to="/" className="back">
          Back
        </Link>
        <h6>
          ID: <span>{movieDetails.id}</span>
        </h6>
        <h1>{movieDetails.title}</h1>
        <h4>
          Overview: <span>{movieDetails.overview}</span>
        </h4>
        <h4>
          Release Date: <span>{getLocaleDate(movieDetails.release_date)}</span>
        </h4>
        <h4>
          Runtime: <span>{movieDetails.runtime}</span>
        </h4>
        <h5>
          Status:{" "}
          <span
            style={{
              color: movieDetails.status === "Released" ? "green" : "red",
            }}
          >
            {movieDetails.status}
          </span>
        </h5>
        <h5>
          Tagline: <span>{movieDetails.tagline}</span>
        </h5>
        <h5>
          Votes Average: <span>{movieDetails.vote_average}/10</span>
        </h5>
        <h5>
          Vote Count: <span>{movieDetails.vote_count}</span>
        </h5>
      </section>
    </div>
  );
};

export default Details;
