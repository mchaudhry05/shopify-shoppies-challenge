import React, { Component } from 'react'; 
import './resultsStyle.css';

class Results extends Component{
   
    
    checkIfMovieNominated = (movieImbID) =>{
        for(let i = 0; i < this.props.nominatedMovies.length; i++){
            if (this.props.nominatedMovies[i][0] === movieImbID){
                return true;
            }
        }
        return false;
    }
    render(){
        
        let movies = this.props.movies;
        
        const style = {
            backgroundColor: "#3C333C", 
            borderColor: "#3C333C",
            color: "white"
        }
    
        return(
            <div className="results">
                
                {
                    movies.length > 0 ? 
                    <div>
                    <div className="movie-list">
                      
                        <h1 className="results-message">Results for "{this.props.userSearch}"</h1>
                        <br></br>
                        
                            {movies.map(movie => 

                                <div className="movie-item">
                                    <img className="movie-poster" key={movie.Poster} src={movie.Poster} alt={movie.Title}></img>
                                    <h2 className="movie-name" key={movie.imdbID}>{movie.Title} ({movie.Year})</h2>
                                    <button key={movie.Title} style={this.checkIfMovieNominated(movie.imdbID) ? style : null}id={movie.imdbID} className="movie-button" onClick={e => this.props.nominateMovie(movie.imdbID, movie.Title, movie.Year, movie.Poster)}>Nominate</button>
                                </div>

                            )}

                    </div> 
                    <div className="buttons">
                        <button className={this.props.currentPage === 1 ? "disable" : "prev-next-button"} onClick={e => this.props.prevPage()}>Previous</button>
                        <button className={this.props.currentPage === this.props.totalPages ? "disable" : "prev-next-button"} onClick={e => this.props.nextPage()}>Next</button>
                    </div>
                    </div>
                 :  
                    <h1 className="error-messages">{this.props.errorMessage ? this.props.errorMessage + " Please try again!"  :  null}</h1>

                }

            </div>
        )
    }
}

export default Results;