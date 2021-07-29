import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom'
import '../../assets/css/characterList.css';
import React from 'react';

function CharacterList({characters}) {

    return (  
        <div className="list">
            {characters.map((char, id) => (
                <Link key={char.id} to={`/${char.id}`}>
                    <CharacterCard key={id} char={char} />
                </Link>
            ))}
        </div>
    );
}

export default CharacterList;