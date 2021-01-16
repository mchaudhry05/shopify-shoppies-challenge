import React, { Component } from 'react'; 
import './loaderStyle.css'; 

class Loader extends Component{
    render(){
        return(
            <div className="loader">
                <div className="loading-circle"></div>
            </div>
        )
    }
}

export default Loader;