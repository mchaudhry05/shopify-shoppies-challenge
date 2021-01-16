import React, { Component } from 'react'; 
import Nominations from '../Nominations/nominations';
import Results from '../Results/results';
import './movieStyle.css'; 

class Movies extends Component{

    state = {

        nominatedMovies:[]

    }

    nominateMovie = (movieImbdID, movieTitle, movieYear) =>{

        if(this.state.nominatedMovies.length === 5){
            //Style this up later 
            alert("Reached Maximum Nomination, please remove a from your nomination list to add another movie!");

        }else{

            var updatednominatedMovies = [...this.state.nominatedMovies]; 
            updatednominatedMovies.push([movieImbdID, movieTitle, movieYear]); 
            
            this.setState({
                nominatedMovies: updatednominatedMovies
            });

            this.disableButton(movieImbdID);

        }
        
        

    }

    removeMovie = (movieImbdID, movieTitle, movieYear) =>{

        let nominatedMovies = [...this.state.nominatedMovies]; 
        let getIndexOfMovie = -1;
        
        for(let i = 0; i < nominatedMovies.length; i++){
            if(nominatedMovies[i][0] === movieImbdID){
                getIndexOfMovie = i;
                break;
            }
        }
        
        nominatedMovies.splice(getIndexOfMovie, 1); 

        this.setState({
            nominatedMovies: nominatedMovies
        });

        this.enableButton(movieImbdID);

    }

    disableButton = (buttonID) =>{
        document.getElementById(buttonID).disabled = true;
    }

    enableButton = (buttonID) =>{
        document.getElementById(buttonID).disabled = false;
    }

    render(){
        
        return(
           
           <div className="Movies">

                <Results movies={this.props.movies} userSearch={this.props.userSearch} nominateMovie={this.nominateMovie} errorMessage={this.props.errorMessage}/>
                <Nominations nominatedMovies={this.state.nominatedMovies} removeMovie={this.removeMovie}/>

            </div>
        )
    }
}

export default Movies; 
