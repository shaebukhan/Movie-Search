import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
const App = () => {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  const [loading, setLoading] = useState(false);
  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?s=${searchMovie}&apikey=6c554fdf`);
      const data = await res.json();
      setAllMovieData(data.Search);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setAllMovieData(data.error.Error);
      setLoading(false);
    }

  };
  return (
    <>
      <Navbar />
      <div className="bg">
        <Search search={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
        <MovieCard allMovieData={allMovieData} loading={loading} />
      </div>
    </>
  );
};

export default App;