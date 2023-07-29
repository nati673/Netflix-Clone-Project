import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Row from "./components/Row/Row";
import requests from "./API/requests";
function App() {
  const {
    fethTrending,
    fetchNetflixOriginals,
    fetchTopRatedMovies,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentaries,
  } = requests;
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={fethTrending} />
      <Row title="Top Rated" fetchUrl={fetchTopRatedMovies} />
      <Row title="Action movies" fetchUrl={fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={fetchHorrorMovies} />
      <Row title="Romance movies" fetchUrl={fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={fetchDocumentaries} />
      <Footer />
    </div>
  );
}
export default App;
