import React, { Component } from 'react'; 
import NominationsItem from '../NominationsItem/NominationsItem';
import './nominationsStyle.css'; 

/**
 * The Nominations class represents the component which when you click 
 * nominations or the Shopify bag in the header it is revealed. 
 */
class Nominations extends Component{

    /**movieRemoved: this is the name of the movie that was recently removed*/
    state = { 
        movieRemoved: ""
    }
    
    /**
     * updates the state with the movie that was just removed
     * and also calls upon the removeMovie function from the props, 
     * which updates the state in the app level component by updating 
     * the nominatedMovies array by deleting chosen movie.
     * @param { String } movieID represents movie IMBD ID 
     * @param { String } movieName represents movie name
     * @param { String } movieYear represents the date movie was released
     */
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

        /**
         * nominatedMovies: is the array containing information about movies that were nominated.
         * showNominationsComponent: is the function located in the app level component which displays 
         * and hides the Nominations component.
         */
        const { nominatedMovies, showNominationsComponent } = this.props;
        const { movieRemoved } = this.state;

        return(
    
            <div className="nominations">
                <div className="nominations-container">
                    <h1 className="nominated-section-heading">YOUR NOMINATIONS</h1>
                    {movieRemoved && <h2 className="remove-notification">You removed {movieRemoved}!</h2>}
        
                        <div className="nominated-movie-list">
                            {   
                                nominatedMovies.map(movie =>
                                   <NominationsItem movie={movie} removeMovie={this.removeMovie}/>
                                )
                            }
                        </div>

                        <button className="nominated-close-button" onClick={showNominationsComponent}>Close</button>
                </div>

            </div>
        

        )
    }
}

export default Nominations;