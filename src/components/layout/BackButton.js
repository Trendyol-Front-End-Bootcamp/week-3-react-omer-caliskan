import React from 'react';
import '../../assets/css/backButton.css';
import { Link } from 'react-router-dom'

function BackButton(){
    return(
        <Link to="/">
        <button className="backbutton">
             {"< Homepage"} 
        </button>
        </Link>
    );
}

export default BackButton;