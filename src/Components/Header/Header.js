import React, { Component } from 'react'; 
import './headerStyle.css';

/**
 * The Header class represents the header component which contains 
 * the name logo for the website and access to your nominations.
 */
class Header extends Component{
    
    render(){

        /**
         * showNominations: is a function that reveals the nomination component on click
         * nominatedMovieslength: is the length of the array which contains information 
         * about all of the nominated movies.
         */
        const { showNominations, nominatedMovieslength } = this.props;

        return(
            <div className="header">

               <div className="logo-name-div">
                    <h1 className="logo-name">THE SHOPPIES</h1>
               </div>
               
                <div className="nomination-view">
                   
                    <h2 className="nomination-text" onClick={showNominations}>NOMINATIONS</h2>
                    <img className="logo-image" src="images/shopify-logo.png" onClick={showNominations} alt="Offical Sponsor"></img>
                    <div className="circle">{nominatedMovieslength}</div>

                </div>

            </div>            
        )
    }

}

export default Header;

