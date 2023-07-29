// Import necessary modules and components
import React, { useState, useEffect } from "react";
import axios from '../../API/axios' // Import axios for making HTTP requests
import YouTube from "react-youtube"; // Import the YouTube component to embed videos
import movieT from "movie-trailer"; // Import the movie-trailer library to get movie trailer URLs
import "./Row.css"; // Import the CSS file for the Row component

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  // Define state variables 'movies' and 'trailerUrl' using the useState hook
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // useEffect hook is used to fetch data when the component mounts or when its dependencies change
  useEffect(() => {
    async function fetchData() {
      // Make an asynchronous request to the server using the provided 'fetchUrl'
      const req = await axios.get(fetchUrl);
      // Set the 'movies' state to the data received from the server
      setMovies(req.data.results);
      return req;
    }
    // Call the fetchData function once, when the component mounts or when 'fetchUrl' changes
    fetchData();
  }, [fetchUrl]);

  // Options for the YouTube video player
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // Function to handle the click event on a movie poster
  const handleClick = (movie) => {
    // If a trailer URL is already set, reset it to an empty string
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // Use the movie-trailer library to get the trailer URL for the clicked movie
      movieT(movie?.title || movie?.name || movie.original_name)
        .then((url) => {
          // Parse the URL to get the 'v' parameter (video ID) and set the 'trailerUrl' state to the video ID
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // The JSX code for the Row component
  return (
    <div className="row">
      {/* Display the title of the row */}
      <h1 className="row__title">{title}</h1>

      <div className="row__posters">
        {/* Map through the movies and display the movie posters */}
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>

      {/* If a trailerUrl is set, display the YouTube video player */}
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

// Export the Row component to be used in other parts of the application
export default Row;
