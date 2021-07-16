import React from 'react';
import '../../assets/css/notfound.css';
import NotFoundImage from '../../assets/images/notfound.png'

function PageNotFound(){
    return(
        <div className="notfound">
        <img src={NotFoundImage} alt="Page Not Found" />
        <div>
         <h1>NO RESULT</h1>
        <h2>The page you are trying to search has been moved to another universe.</h2>
        </div>
        </div>
    )
}

export default PageNotFound;