import React, { Component } from 'react'; 
import './nominationsStyle.css'; 

class Nominations extends Component{

    state = { 
        movieRemoved: ""
    }
    
    removeMovie = (movieID, movieName, movieYear) =>{
        this.setState({
            movieRemoved: movieName
        }); 

        this.props.removeMovie(movieID, movieName, movieYear);

        setTimeout(()=>{
            this.setState({
                movieRemoved: ""
            });
        }, 5000);
    }
    
    render(){

        let nominatedMovies = this.props.nominatedMovies;
        return(
    
            <div className="nominations">
                <div className="nominations-container">
                    <h1 className="nominated-section-heading">YOUR NOMINATIONS</h1>
                    {this.state.movieRemoved && <h2 className="remove-notification">You removed {this.state.movieRemoved}!</h2>}
        
                        <div className="nominated-movie-list">
                            {   
                                nominatedMovies.map(movie =>
                                    <div className="nominated-movie-item">
                                        <img src={movie[3]} alt={movie[3]}></img>
                                        <h4 className="nominated-movies-details" key={movie}>{movie[1]} ({movie[2]})</h4>
                                        <button key={movie[0]} id={movie[1]} className="remove-button" onClick={e => this.removeMovie(movie[0], movie[1], movie[2])}>Remove</button>
                                    </div>
                                )
                            }
                        </div>

                        <button className="nominated-close-button" onClick={this.props.showNominationsComponent}>Close</button>
                </div>

            </div>
        

        )
    }
}

export default Nominations;