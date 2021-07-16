import React from'react';
import Pickle from "../../assets/images/pickle.png";
import '../../assets/css/loading.css';

function Loading(){
    return (
        <div className="loading">
            <img src={Pickle} alt="Wubba Lubba Dub Dub"/>
            <h2>Page Loading ...</h2>
        </div>
    )
}

export default Loading;