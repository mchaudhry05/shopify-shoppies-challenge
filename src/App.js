import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import SearchBar from './Components/SearchBar/SearchBar';
import Results from './Components/Results/Results';
import Nominations from './Components/Nominations/Nominations';
import AddedNominations from './Components/AddedNomination/AddedNomination';

/**
 * The App class represents the app component is acting as the global state 
 * and where any piece of data that will be required by any component will be
 * available in this component. This component also contains all of the functions
 * which interact which the global state and the app as a whole.
 */
class App extends Component{

  /**
   * movies: this is an array which contains the movies that will be displayed 
   * according to the users' searches
   * nominatedMovies: this is an array which contains the movies that have been 
   * nominated
   * userSearch: this is a string containing the user's search
   * errorMessag: this a string which will be changed to display any error the API
   * sends back to us 
   * showNominations: this boolean controls whether to hide or display the Nominations
   * component
   * maxmimumNominationsReached: this boolean decides whether to display the Banner 
   * Component (if 5 nominations have been made)
   * recentlyNominated: this is an array which contains the movie poster, movie name, 
   * and movie year of the movie that was just nominated 
   * totalPages: this is the number which contains the total pages of a user search
   * currentPage: this is the nummber of the current page of the user search results
   */
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

  /**
   * this function checks if the user had previously visited the website 
   * and had nominated movies, if so those movies are assigned to the 
   * nominatedMovies array, otherwise a blank array is sent into memory
   */
  componentDidMount(){

    if(localStorage.getItem('nominatedMovies')){

      this.setState({
        nominatedMovies: JSON.parse(localStorage.getItem('nominatedMovies'))
      });

    }else{
      localStorage.setItem('nominatedMovies', JSON.stringify([]));
    }

  }

  /**
   * this function displays or hides the Nominations component based on 
   * which button is clicked
   */
  showNominationsComponent = () =>{

    this.setState(prevState =>{
      return{
        showNominations: !prevState.showNominations
      }
    });

  }

  /**
   * this function will open the AddedNominations Component if a movie
   * was nominated
   */
  nominationConfirmation = () =>{
    let getComponent = document.getElementsByClassName('addedNominations')[0]; 
    getComponent.style.display = "block";
  }


  /**
   * this function will close the AddedNominations Component if a movie
   * was nominated and the user clicks the close button
   */
  closeNominationConfirmation = () =>{
    let getComponent = document.getElementsByClassName('addedNominations')[0]; 
    getComponent.style.display = "none";
  }


  /**
   * this function adds a movie to the nominatedMovies array 
   * and updates the array in localStorage
   * @param { String } movieImbdID represents the movie IMBD ID
   * @param { String } movieTitle represents the movie name
   * @param { String } movieYear represents the year the movie was released
   * @param { String } moviePoster represents the poster of the movie
   */
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

  /**
   * this function removes a movie from nomination (nominatedMovies array)
   * and resets all button functionality 
   * @param { String } movieImbdID represents the movie IMBD ID 
   * @param { String } movieTitle represents the movie nmae
   * @param {String } movieYear represents the year in which the movie was released
   */
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

  /**
   * this function disables a button for the movie that was nominated
   * @param { String } buttonID represents ID of button
   */
  disableButton = (buttonID) =>{
    if(document.getElementById(buttonID)){
      document.getElementById(buttonID).disabled = true;
      document.getElementById(buttonID).style.backgroundColor = "#3C333C";
      document.getElementById(buttonID).style.borderColor = "#3C333C";
      document.getElementById(buttonID).style.color = "white";
    }  
  }
  /**
   * this function enables a button for the movie that was removed from nomination
   * @param { String } buttonID represents ID of button
   */
  enableButton = (buttonID) =>{
    if(document.getElementById(buttonID)){
      document.getElementById(buttonID).disabled = false;
      document.getElementById(buttonID).style.backgroundColor = "#C4994D"; 
      document.getElementById(buttonID).style.borderColor = "#C4994D";
      document.getElementById(buttonID).style.color = "#070605";
    }
  }

  /**
   * this function calculates the total number of pages based on the 
   * number of total search results and updates totalPages accordingly
   * @param { String } totalResults represents the total number of results
   */
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

  /**
   * this functin updates the movies and userSearch parts of the state, 
   * by getting the movies outputted by the API call in the SearchBar component
   * @param { Array } newMovies represents the movies to display from user search
   * @param { String} userSearch represents the search inputted by the user 
   */
  updateMovies = (newMovies, userSearch) =>{

    this.setState({
      movies: newMovies,
      userSearch: userSearch
    });

  }

  /**
   * this function updates the error message that was retrieved from the API call 
   * in the SearchBar Component
   * @param { String } newErrorMessage 
   */
  updateErrorMessage = (newErrorMessage) =>{

    this.setState({
      errorMessage: newErrorMessage
    });

  }
  
  /**
   * this function moves the user to the next page of results
   * when they click the next button
   */
  nextPage = () =>{

    if(this.state.currentPage + 1 <= this.state.totalPages){

      this.setState(prevState =>{
        return{
          currentPage: prevState.currentPage + 1
        }
      });

    }

  }

  /**
   * this function moves the user to the previous page of results
   * when they click the previous button
   */
  prevPage = () =>{
    if(this.state.currentPage - 1 > 0){
      this.setState(prevState =>{
        return{
          currentPage: prevState.currentPage -1 
        }
      });
    }
  }

  /**
   * this function resets the users current page position to 1 
   * when they do a new search result
   */
  resetCurrentPage = () =>{
    this.setState({
      currentPage: 1
    })
  }
  
  render(){

    const {
      movies, 
      nominatedMovies,
      userSearch,
      errorMessage,
      showNominations,
      maxmimumNominationsReached,
      recentlyNominated,
      totalPages,
      currentPage,
    } = this.state

    return(

      <div className="App">

        <Header 
          showNominations={this.showNominationsComponent} 
          nominatedMovieslength={nominatedMovies.length}
        />

        {maxmimumNominationsReached && <Banner/>}

        <SearchBar 
          updateMovies={this.updateMovies}
          updateErrorMessage={this.updateErrorMessage}
          getTotalResults={this.getTotalResults}
          page={currentPage}
          resetCurrentPage={this.resetCurrentPage}
        />

        <Results 
          movies={movies}
          userSearch={userSearch}
          nominateMovie={this.nominateMovie}
          errorMessage={errorMessage}
          nominatedMovies={nominatedMovies}
          currentPage={currentPage}
          totalPages={totalPages}
          prevPage={this.prevPage}
          nextPage={this.nextPage}
        />

        {showNominations && 
        <Nominations 
          nominatedMovies={nominatedMovies}
          removeMovie={this.removeMovie}
          showNominationsComponent={this.showNominationsComponent}
        />
        }

        <AddedNominations 
          recentlyNominated={recentlyNominated}
          closeNominationConfirmation={this.closeNominationConfirmation}
        />

      </div>

    )
  }
}

export default App;
