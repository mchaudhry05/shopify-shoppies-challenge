import React, { Component } from 'react';
import './nominationsItemStyle.css'; 

/**
 * The NominationsItem class represents the NominationsItem component 
 * which is a singular nominated movie.
 */
class NominationsItem extends Component{

    render(){

        /**
         * movie: this is an object that represents the details of the movie 
         * removeMovie: is a function that removes a nominated movie from 
         * the array of nominatedMovies (located in the app component)
         */
        const { movie, removeMovie} = this.props;

        return(
            <div className="nominated-movie-item">
                <img src={movie[3]} alt={movie[3]}></img>
                <h4 className="nominated-movies-details" key={movie}>{movie[1]} ({movie[2]})</h4>
                <button key={movie[0]} id={movie[1]} className="remove-button" onClick={e => removeMovie(movie[0], movie[1], movie[2])}>Remove</button>
            </div>

        )
    }
}

export default NominationsItem;
