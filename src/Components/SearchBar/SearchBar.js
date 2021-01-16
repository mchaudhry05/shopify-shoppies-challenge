import React, { Component } from 'react'; 
import axios from 'axios';
import './searchBarStyle.css';


const API_URL = 'https://www.omdbapi.com/'; 
const API_KEY = '1999d2f8';
const MOVIE_ATTRIBUTE = "type=movie"; 

/**
 * The SearchBar class represents the search bar and is where the calls to 
 * the API are made using AXIOS.
 */
class SearchBar extends Component{

    /**
     * userSearch: is where the users input whill be saved
     */
    state = {
        userSearch: ''
    }

    /**
     * this takes care of the subsquent API calls by checking if the page
     * to display more results
     * @param {*} prevProps 
     */
    componentDidUpdate(prevProps){
        if (prevProps.page !== this.props.page){
            this.getMovies();
        }
    }
    
    /**
     * this prevents the page from refreshing if someone hits enter on their search
     * @param {Event} e 
     */
    updateResults = (e) =>{     
        e.preventDefault();
    }

    /**
     * this updates the state of userSearch, resets page counter 
     * if the user is entering a new search, and calls the OMBD API
     * @param {Event} e 
     */
    updateUserSearch = (e) =>{
        
        let value = e.target.value.trim();

        if(value !== '' && value !== ' '){

            this.setState({
                userSearch: e.target.value.trim()
            });

            this.props.resetCurrentPage() 
            this.getMovies();
        }

    }

    /**
     * this function gets the requested information from the API to display in the Results 
     * component, it also calls: 
     * updateErrorMessage function: which updates the state in the app level component to
     * tell the Results Component to display an error
     * updateMovies function: which updates the state in the app level component to
     * tell the Results Component which movies to display
     * getTotalResults function: which updates the state in the app level component to
     * by telling it the total number of results which is then used in total page 
     * calculation
     */ 
    getMovies = () => {

        axios.get(`${API_URL}?apikey=${API_KEY}&${MOVIE_ATTRIBUTE}&s=${this.state.userSearch}&page=${this.props.page}`)
            .then(({ data }) =>{
                if(data.Error){
                    this.props.updateErrorMessage(data.Error);
                    this.props.updateMovies([], this.state.userSearch);
                }else{
                    this.props.getTotalResults(data.totalResults);
                    this.props.updateMovies(data.Search, this.state.userSearch);
                }
            })

    }

    render(){
      
        return(
            <div className="searchBar">

                <form onSubmit={this.updateResults}>
                    <input className="search-bar" type="text" name="search" onChange={this.updateUserSearch} placeholder="Search for a Movie"></input>
                </form>

            </div>
        )
    }
}

export default SearchBar;