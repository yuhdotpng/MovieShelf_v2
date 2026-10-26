import { useState, useEffect } from 'react';
import MovieGrid from '../components/MovieGrid';

function WatchList() {
  const [watchlist, setWatchList] = useState([]);

  useEffect(() => {
    const watchlisted = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchList(watchlisted);
  }, []);

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>My Watchlist</h2>
        <p>Movies you plan to watch</p>
      </div>
      {watchlist.length > 0 ? (
        <MovieGrid movies={watchlist} />
      ) : (
        <div className="empty-state">
          <p>No watchlisted movies yet. Start adding some from the home page!</p>
        </div>
      )}
    </main>
  );
};

export default WatchList;