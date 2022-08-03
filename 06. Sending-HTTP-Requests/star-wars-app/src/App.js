import React, { useState } from "react";

import MoviesList from "./components/MoviesList/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = () => {
    fetch("https://swapi.dev/api/films")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((md) => {
          return {
            id: md.episode_id,
            title: md.title,
            openingText: md.opening_crawl,
            releaseDate: md.release_date,
          };
        });
        setMovies(transformedMovies);
      })
      .catch();
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
