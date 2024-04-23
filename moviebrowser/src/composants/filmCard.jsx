import React from "react";

const FilmCard = ({ film })=> {
    return (
      <div  className="film">
        <p className="film-date">{film.release_date?.split('-')[0]}</p>
        <img 
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
            alt={film.title} 
            className="film-img"
        />
        <img 
        className="film-img" 
        src={film.poster_path !== 'N/A' ? film.poster_path  : 'https://via.placeholder.com/300' } 
        alt={film.title}
      />
        <div className="filter"></div>
        <div className="film-infos">
            <span className="film-note">{film.vote_average}</span>
            <h3>{film.title}</h3>
        </div>
      </div>
    )
  }

export default FilmCard;