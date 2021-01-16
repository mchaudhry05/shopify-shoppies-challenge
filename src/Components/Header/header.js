import React, { Component } from 'react'; 
import './headerStyle.css';


class Header extends Component{
    
    render(){
        return(
            <div className="header">

               <div className="logo-name-div">
                    <h1 className="logo-name">THE SHOPPIES</h1>
               </div>
               
                <div className="nomination-view">
                   
                    <h2 className="nomination-text" onClick={this.props.showNominations}>NOMINATIONS</h2>
                    <img className="logo-image" src="images/shopify-logo.png" onClick={this.props.showNominations} alt="Offical Sponsor"></img>
                    <div className="circle">{this.props.nominatedMovieslength}</div>

                </div>

            </div>            
        )
    }

}

export default Header;

