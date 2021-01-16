import React, { Component } from 'react'; 
import ResultsItem from '../ResultsItem/ResultsItem';
import './resultsStyle.css';

/**
 * Results class represents the results component which displays 
 * the results of the user search and allows the user to nominate a 
 * movie and go to the next page of results.
 */
class Results extends Component{
   
    /**
     * this function will check if any of the movies being displayed 
     * have already been nominated 
     * @param { String } movieImbID 
     */
    checkIfMovieNominated = (movieImbID) =>{
        for(let i = 0; i < this.props.nominatedMovies.length; i++){
            if (this.props.nominatedMovies[i][0] === movieImbID){
                return true;
            }
        }
        return false;
    }

    render(){
        
        /**
         * movies: this is the array of movies to display 
         * userSearch: this is the search the user made
         * currentPage: this is the page number of the results the user is on
         * totalPages: this is the total number of pages 
         * nominateMovie: this function is in the app level component and helps to 
         * make sure that the movie nominated is added to the nominatedMovies array
         * prevPage: this is a function that allows the user to go to the previous page 
         * nextPage: this is a function that allows the user to go to the next page 
         */
        const { movies, userSearch, currentPage, totalPages, nominateMovie, errorMessage, prevPage, nextPage } = this.props
            
        return(
            <div className="results">
                
                {
                    movies.length > 0 ? 
                    <div>
                    <div className="movie-list">
                      
                        <h1 className="results-message">Results for "{userSearch}"</h1>
                        <br></br>
                        
                            {movies.map(movie => 

                                <ResultsItem movie={movie} nominateMovie={nominateMovie} checkIfMovieNominated={this.checkIfMovieNominated}/>

                            )}

                    </div> 
                    
                    <div className="buttons">
                        <button className={currentPage === 1 ? "disable" : "prev-next-button"} onClick={e => prevPage()}>Previous</button>
                        <button className={currentPage === totalPages ? "disable" : "prev-next-button"} onClick={e => nextPage()}>Next</button>
                    </div>

                    </div>
                 :  
                    <h1 className="error-messages">{errorMessage ? errorMessage + " Please try again!"  :  null}</h1>

                }

            </div>
        )
    }
}

export default Results;