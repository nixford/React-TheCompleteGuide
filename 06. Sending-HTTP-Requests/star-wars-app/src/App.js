import React, { useState } from "react";

import MoviesList from "./components/MoviesList/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    await fetch("https://swapi.dev/api/films")
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
      });
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
        {!isLoading && movies.length === 0 && <p>No movies loaded...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
