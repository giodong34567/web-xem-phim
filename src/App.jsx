import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';

function App() {

  const [movie, setMovie] = useState([]);
  const [movieRated, setMovieRated] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1';

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options)
      ])

      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovie(data1.results);
      setMovieRated(data2.results);

      console.log(data2);
    }

    fetchMovie();
  }, [])

  const handleSearch = async (searchVal) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
      console.log(data)
    } catch (error) {

    }
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <Banner />
      {
        movieSearch.length > 0 ? (
          <MovieSearch title={"Kết quả tìm kiếm"} data={movieSearch} />
        ) : (
          <>
            <MovieList title={"Phim hot"} data={movie} />
            <MovieList title={"Phim đề cử"} data={movieRated} />
          </>
        )
      }
    </>
  )
}

export default App
