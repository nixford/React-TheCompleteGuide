import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
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
      })
      .catch(() => {
        setError("Something went wrong!");
      });
    setIsLoading(false);
  };

  // If it is neccessary the data to be loaded in the beginning of the page load
  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, []);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && movies.length === 0 && (
          <p>No movies loaded...</p>
        )}
        {!isLoading && error && <h3 className="error-message">{error}</h3>}
      </section>
    </React.Fragment>
  );
}

export default App;
