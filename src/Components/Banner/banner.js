import React, { Component } from 'react';
import './bannerStyle.css'; 

class Banner extends Component{
    render(){
        return(
            <div className="banner"> 
                <h4 className="banner-message">YOU HAVE NOMINATED THE MAXIMUM AMOUNT OF MOVIES!</h4>
            </div>
        )
    }
}

export default Banner;