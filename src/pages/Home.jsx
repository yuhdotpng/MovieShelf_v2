import MovieGrid from '../components/MovieGrid';
import {getPopularMovies} from '../services/movieService';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { useState, useEffect } from 'react';

function Home({searchResults}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
	// Define a second async function to invoke our service function
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const movieData = await getPopularMovies();
        setMovies(movieData);
      } catch (err) {
        setError('Failed to load movies. Please try again later.');
        setMovies([]); // Set to empty array to prevent map errors
      } finally {
        setLoading(false);
      }
    };
	// Immediately call the service function
  fetchMovies();
  }, []); // Empty dependency array
  const displayMovies = searchResults || movies;

  if (loading) {
    return (
      <main className="main-content">
        <LoadingSpinner />
      </main>
    );
  }

   if (error) {
    return (
      <main className="main-content">
        <ErrorMessage message={error} />
      </main>
    );
  }

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>{searchResults ? 'Search Results' : 'Popular Movies'}</h2>
        <p>Discover and save your favorite films</p>
      </div>
      <MovieGrid movies={displayMovies} />
    </main>
  );
};

export default Home;