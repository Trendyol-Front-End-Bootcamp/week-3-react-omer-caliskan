import React from 'react';
import '../../assets/css/characterCard.css';

function CharacterCard({char}) {
    return (
        <div className="list-item">
            <h3>{char.name}</h3>
            <img src={char.image} alt="Rick and Morty" />
            <div className="item-prop">
        <span><b>Species:</b> {char.species}</span>
        <span><b>Gender:</b> {char.gender}</span>
        <span><b>Origin:</b> {char.origin.name}</span>
        <span><b>Status:</b> {char.status}</span>
        <span><b>Last Known Location:</b> {char.location.name}</span>
        </div>
        </div>
    );
}

export default CharacterCard;