import React, { Component } from 'react'; 
import axios from 'axios';
import './searchBarStyle.css';

const API_URL = 'https://www.omdbapi.com/'; 
const API_KEY = '1999d2f8';
const MOVIE_ATTRIBUTE = "type=movie"; 

class SearchBar extends Component{

    state = {

        userSearch: ''

    }

    updateResults = (e) =>{
        
        e.preventDefault();
       
    }

    componentDidUpdate(prevProps){
        if (prevProps.page !== this.props.page){
            this.getMovies();
        }
       
    }


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

    getMovies = () => {
        axios.get(`${API_URL}?apikey=${API_KEY}&${MOVIE_ATTRIBUTE}&s=${this.state.userSearch}&page=${this.props.page}`)
            .then(({ data }) =>{
                console.log(data)
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