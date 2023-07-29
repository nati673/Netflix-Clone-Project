const APIKEY = process.env.REACT_APP_API_KEY
  //    https://api.themoviedb.org/3/movie/550?api_key=bc7650b2c4d5178002c2ef554604c7c6
const requests = {
  fethTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${APIKEY}&with_genres=99`,
};
export default requests;