import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeNames from './EpisodeNames';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import BackButton from '../layout/BackButton';
import Loading from '../layout/Loading';
import '../../assets/css/characterDetails.css';

function CharacterDetails(){
  const [character, setCharacter] = useState({
        name: "",
        image: "",
        status: "",
        species: "",
        origin: { name: "" },
        location: { name: "" },
        episode: [],
    });
    const [loading, setLoading] = useState(false);
  
  const {id} = useParams();

  useEffect( () => {
    axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setCharacter(response.data)
          setLoading(true)});
  }, [id, loading]);


    return(
      loading ? <div className="details">
          <Link to="/">
            <BackButton />
          </Link>
          <div className="detail-item">
            <div className="detail-item-img">
              <img src={character.image} alt = "Character Img" />
            </div>
            <div className="detail-item-text">
              <ul className="detail-item-text-top">
                <h1>{character.name}</h1> 
                <li><strong>Species:</strong> {character.species}</li>
                <li><strong>Gender:</strong> {character.gender}</li>
                <li><strong>Status:</strong> {character.status}</li>
                <li><strong>Location:</strong> {character.location.name}</li>
                <li><strong>Origin:</strong> {character.origin.name}</li>
                {character.type ? <li><strong>Type:</strong> {character.type}</li> : <li><strong>Type:</strong> -</li> }
                <li>
                  <span><strong>Last 5 Episodes:</strong></span>
                  <ul className="episode-names">
                    {character.episode.slice().reverse().filter((episode, id) => id < 5).map((episode, id) => (
                    <EpisodeNames key={id} episode={episode} />
                      ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        : <Loading /> 
    );
}

export default CharacterDetails;