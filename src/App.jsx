import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { searchMovies } from './services/movieService';
import './App.css';

function App() {
  // Create search state
  const [searchResults, setSearchResults] = useState(null); 
  // Handler function to query search
  const handleSearch = async (query) => { 
    const results = await searchMovies(query); 
    setSearchResults(results); 
  }; 
  return (
    <Router>
      <div className="app">
        <Header onSearch = {handleSearch}/>
        <Routes>
          <Route path="/" element={<Home searchResults={searchResults}/>} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;