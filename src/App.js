import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/header';
import Banner from './Components/Banner/banner';
import SearchBar from './Components/SearchBar/searchBar';
import Results from './Components/Results/results';
import Nominations from './Components/Nominations/nominations';
import AddedNominations from './Components/AddedNomination/addedNomination';


//SEE IF ITS POSSIBLE TO BREAK UP THE CODE MORE SO NOT 
//ALL THE FUNCTIONS ARE IN THE SAME PLACE

class App extends Component{

  state = {

    movies: [], 
    nominatedMovies:[],
    userSearch: "",
    errorMessage: "",
    showNominations: false,
    maxmimumNominationsReached: false,
    recentlyNominated: [],
    totalPages: 0,
    currentPage: 1,
  }

  componentDidMount(){

    if(localStorage.getItem('nominatedMovies')){

      this.setState({
        nominatedMovies: JSON.parse(localStorage.getItem('nominatedMovies'))
      });

    }else{
      localStorage.setItem('nominatedMovies', JSON.stringify([]));
    }

  }

  showNominationsComponent = () =>{
    this.setState(prevState =>{
      return{
        showNominations: !prevState.showNominations
      }
    });
  }

  nominationConfirmation = () =>{
    let getComponent = document.getElementsByClassName('addedNominations')[0]; 
    getComponent.style.display = "block";
  }

  closeNominationConfirmation = () =>{
    let getComponent = document.getElementsByClassName('addedNominations')[0]; 
    getComponent.style.display = "none";
  }

  nominateMovie = (movieImbdID, movieTitle, movieYear, moviePoster) =>{

    if(this.state.nominatedMovies.length === 5){
      
        this.setState({
          maxmimumNominationsReached: true
        });
        
        setTimeout(()=>{
          this.setState({
            maxmimumNominationsReached: false
          });
        }, 3000);
        
    }else{

        var updatednominatedMovies = [...this.state.nominatedMovies]; 
        updatednominatedMovies.push([movieImbdID, movieTitle, movieYear, moviePoster]); 
        
        this.setState({
            nominatedMovies: updatednominatedMovies, 
            recentlyNominated: [movieTitle, movieYear, moviePoster], 
        });


        this.disableButton(movieImbdID);
        localStorage.removeItem('nominatedMovies'); 
        localStorage.setItem('nominatedMovies', JSON.stringify(updatednominatedMovies));
        this.nominationConfirmation(); 


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
      localStorage.removeItem('nominatedMovies'); 
      localStorage.setItem('nominatedMovies', JSON.stringify(nominatedMovies));

  }

  disableButton = (buttonID) =>{
    if(document.getElementById(buttonID)){
      document.getElementById(buttonID).disabled = true;
      document.getElementById(buttonID).style.backgroundColor = "#3C333C";
      document.getElementById(buttonID).style.borderColor = "#3C333C";
      document.getElementById(buttonID).style.color = "white";
    }  
  }

  enableButton = (buttonID) =>{
    if(document.getElementById(buttonID)){
      document.getElementById(buttonID).disabled = false;
      document.getElementById(buttonID).style.backgroundColor = "#C4994D"; 
      document.getElementById(buttonID).style.borderColor = "#C4994D";
      document.getElementById(buttonID).style.color = "#070605";
    }
  }

  getTotalResults = (totalResults) =>{
    let intTotalResults = parseInt(totalResults);
    let remainder = intTotalResults % 10; 
    let roundToTen = 10 - remainder; 
    let addBack = remainder + roundToTen; 
    let totalPages = intTotalResults - remainder + addBack; 
    this.setState({
      totalPages: totalPages/10
    })

  }

  updateMovies = (newMovies, userSearch) =>{

    this.setState({
      movies: newMovies,
      userSearch: userSearch
    });

  }

  updateErrorMessage = (newErrorMessage) =>{

    this.setState({
      errorMessage: newErrorMessage
    });

  }
  
  nextPage = () =>{
    if(this.state.currentPage + 1 <= this.state.totalPages){
      this.setState(prevState =>{
        return{
          currentPage: prevState.currentPage + 1
        }
      });
    }
  }

  prevPage = () =>{
    if(this.state.currentPage - 1 > 0){
      this.setState(prevState =>{
        return{
          currentPage: prevState.currentPage -1 
        }
      });
    }
  }

  resetCurrentPage = () =>{
    this.setState({
      currentPage: 1
    })
  }
  
  render(){

    return(

      <div className="App">

        <Header showNominations={this.showNominationsComponent} nominatedMovieslength={this.state.nominatedMovies.length}/>
        {this.state.maxmimumNominationsReached && <Banner/>}
        <SearchBar updateMovies={this.updateMovies} updateErrorMessage={this.updateErrorMessage} getTotalResults={this.getTotalResults} page={this.state.currentPage} resetCurrentPage={this.resetCurrentPage}/>
        <Results movies={this.state.movies} userSearch={this.state.userSearch} nominateMovie={this.nominateMovie} errorMessage={this.state.errorMessage} nominatedMovies={this.state.nominatedMovies} currentPage={this.state.currentPage} totalPages={this.state.totalPages} prevPage={this.prevPage} nextPage={this.nextPage}/>
        {this.state.showNominations && <Nominations nominatedMovies={this.state.nominatedMovies} removeMovie={this.removeMovie} showNominationsComponent={this.showNominationsComponent}/>}
        <AddedNominations recentlyNominated={this.state.recentlyNominated} closeNominationConfirmation={this.closeNominationConfirmation}/>

      </div>

    )
  }
}

export default App;
