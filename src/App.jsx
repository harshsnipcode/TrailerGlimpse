import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import Tv from "./Components/Tv";
import Person from "./Components/Person";
import MovieDetails from "./Components/MovieDetails";
import TvDetails from "./Components/TvDetails";
import PersonDetail from "./Components/PersonDetail";
import Trailer from "./partials/Trailer";

function App() {
  return (
    <>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/trending" element={<Trending />} />
  <Route path="/popular" element={<Popular />} />
  <Route path="/movie" element={<Movie />} />
  <Route path="/movie/details/:id" element={<MovieDetails />}>
    <Route path="trailer" element={<Trailer />} /> {/* <-- RELATIVE */}
  </Route>
  <Route path="/tv" element={<Tv />} />
  <Route path="/tv/details/:id" element={<TvDetails />}>
    <Route path="trailer" element={<Trailer />} /> {/* <-- RELATIVE */}
  </Route>
  <Route path="/person" element={<Person />} />
  <Route path="/person/details/:id" element={<PersonDetail />} />
</Routes>
    </>
  );
}

export default App;
