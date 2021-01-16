import React, { Component } from 'react'; 
import './addedNominationStyle.css'; 

/**
 * The AddedNominations component is a modal in which a confirmation appears 
 * that the movie you nominated was successfully added to your list of 
 * nominations.
 */

class AddedNominations extends Component{
    
    render(){
        
        /**
         * recentlyNominated: is an array that contains [movieName, movieYear, moviePoster]
         * closeNominationConfirmation: is a function that closes the AddedNominations component
         */
        const {recentlyNominated, closeNominationConfirmation } = this.props
        
        return(
            
            <div className="addedNominations">

                <div className="nominationsContainer">
                    
                    <div className="sucessful-message"> 
                        <h1 className="successful">SUCCESSFULLY NOMINATED!</h1>
                    </div>
                    
                    <div className="movie-container">
                        <div className="image-contianer"> 
                            <img src={recentlyNominated[2]} alt={recentlyNominated[0]}></img>
                        </div>

                        <div className="movie-details">
                            <h2>{recentlyNominated[0]}</h2>
                            <h3>{recentlyNominated[1]}</h3>
                            <button className="close-button" onClick={closeNominationConfirmation}>Close</button>
                        </div>
                    </div>
                    

                </div>

            </div>
        )
    }
}

export default AddedNominations;