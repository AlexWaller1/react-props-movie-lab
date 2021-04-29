import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movie, index) => <MovieCard
    key={index}
    title={movie.title}
    IMDBRating={movie.IMDBRating}
    genres={movie.genres}
    poster={movie.poster}
    />)
  };

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

// the component that will house all of the 'raw' data associated 
// with the movies we want to display
// passes on data to child component MovieCard