import React, { Component } from 'react'; 
import './addedNominationStyle.css'; 


class AddedNominations extends Component{
    render(){
        return(
            <div className="addedNominations">

                <div className="nominationsContainer">
                    
                    <div className="sucessful-message"> 
                        <h1 className="successful">SUCCESSFULLY NOMINATED!</h1>
                    </div>
                    
                    <div className="movie-container">

                        <div className="image-contianer"> 
                            <img src={this.props.recentlyNominated[2]} alt={this.props.movieName}></img>
                        </div>

                        <div className="movie-details">
                            <h2>{this.props.recentlyNominated[0]}</h2>
                            <h3>{this.props.recentlyNominated[1]}</h3>
                            <button className="close-button" onClick={this.props.closeNominationConfirmation}>Close</button>
                        </div>

                    </div>
                    

                </div>



            </div>
        )
    }
}

export default AddedNominations;