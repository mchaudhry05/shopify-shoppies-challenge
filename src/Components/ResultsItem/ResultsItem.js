import React, { Component } from 'react'; 
import './resultsItemStyle.css';

/**
 * The ResultsItem class represents the ResultsItem Component which is 
 * a singular movie that will need to be displayed.
 */
class ResultsItem extends Component{

    render(){

        /**
         * movie: is an object with all the information about said movie 
         * nominateMovie: is the function that adds a movie to the Nomination List 
         * checkIfMovieNominated is the function that checks if a movie was nominated 
         * so it can disable the button
         */
        const { movie, nominateMovie, checkIfMovieNominated} = this.props;

        /** this style is used to disable the nomination button if the movie has already been nominated */
        const style = {
            backgroundColor: "#3C333C", 
            borderColor: "#3C333C",
            color: "white"
        }

        return(
            <div className="movie-item">
                <img className="movie-poster" key={movie.Poster} src={movie.Poster} alt={movie.Title}></img>
                <h2 className="movie-name" key={movie.imdbID}>{movie.Title} ({movie.Year})</h2>
                <button key={movie.Title} style={checkIfMovieNominated(movie.imdbID) ? style : null}id={movie.imdbID} className="movie-button" onClick={e => nominateMovie(movie.imdbID, movie.Title, movie.Year, movie.Poster)}>Nominate</button>
            </div>
        )
    }
}

export default ResultsItem;
