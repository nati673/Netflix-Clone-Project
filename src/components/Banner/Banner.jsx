// Import necessary modules and components
import React, { useState, useEffect } from "react";
import "./Banner.css"; // Import the CSS file for the Banner component
import requests from "../../API/requests"; // Import a file with API request URLs
import axios from "../../API/axios"; // Import axios for making HTTP requests

function Banner() {
  // Define a state variable 'movie' and its setter function 'setMovie' using the useState hook
  const [movie, setMovie] = useState([]);

  // useEffect hook is used to fetch data when the component mounts or when its dependencies change
  useEffect(() => {
    async function fetchData() {
      // Make an asynchronous request to the server to get data for Netflix Originals
      const requ = await axios.get(requests.fetchNetflixOriginals);
      // Generate a random index to select a random movie from the data received
      let a = Math.floor(Math.random() * requ.data.results.length);
      // Set the 'movie' state to the selected movie object
      setMovie(requ?.data.results[a]);
    }
    // Call the fetchData function once, when the component mounts (empty dependency array)
    fetchData();
  }, []);

  // Function to truncate a string to a specified length and add ellipsis if needed
  function tr(s, n) {
    return s?.length > n ? s.substr(0, n - 1) + "..." : s;
  };//truncate

  // The JSX code for the Banner component
  return (
    <div
      className="banner"
      style={{
        // Set the background image for the banner using the selected movie's backdrop_path
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundSize: "cover", // Make sure the background image covers the entire banner
        backgroundPosition: "center center", // Center the background image
      }}
    >
      <div className="banner__contents">
        {/* Display the title of the selected movie */}
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_title}
        </h1>
        <div className="banner__buttons">
          {/* Buttons for 'play' and 'Mylist' */}
          <button className="banner__button">play</button>
          <button className="banner__button">Mylist</button>
        </div>
        {/* Display a truncated version of the movie overview */}
        <h4 className="banner__discription">{tr(movie?.overview, 150)}</h4>
      </div>
      {/* A fade effect at the bottom of the banner */}
      <div className="banner__fade"></div>
    </div>
  );
}

// Export the Banner component to be used in other parts of the application
export default Banner;
