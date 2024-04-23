import './App.css';
import { useState, useEffect } from 'react';
import searchicon from './searchIcon.svg';
import FilmCard from './composants/filmCard';

const App = () => {
  const API_KEY = '1f54bd990f1cdfb230adb312546d765d';
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState('');

  const rechercheFilms = async (titre) => {
    if (titre) {
      const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&query=${encodeURIComponent(titre)}`);
      const data = await response.json();
      console.log(data);
      setFilms(data.results); // Utilisez 'results' pour TheMovieDB
    }
  };

  useEffect(() => {
    rechercheFilms('batman');
  }, []);

  return (
    <div className="app">
      <h1>Movie Browser</h1>
      <div className="search">
        <input 
          type="text" 
          placeholder="Écrivez le nom du film" 
          value={searchFilm} 
          onChange={(e) => setSearchFilm(e.target.value)}
        />
        <img 
          src={searchicon} 
          alt="Search" 
          onClick={() => rechercheFilms(searchFilm)}
        />
      </div>
      <div className="container">
        {films.length > 0 ? (
          films.map((film) => <FilmCard key={film.id} film={film} />)
        ) : (
          <div className="empty">
            <h2>Film introuvable</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
