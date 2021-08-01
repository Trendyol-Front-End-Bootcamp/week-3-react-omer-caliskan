import React, { useEffect, useState } from 'react';
import EpisodeNames from './EpisodeNames';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import BackButton from '../layout/BackButton';
import Loading from '../layout/Loading';
import '../../assets/css/characterDetails.css';
import { getCharacterById } from "../../service/RickandMortyService"

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

    const fetch = async () => {
      const data = await getCharacterById(id);
      setCharacter(data)
      setLoading(true)
    }

    fetch();

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
                <li>
                  <span><strong>Last 5 Episodes:</strong></span>
                  <ul className="episode-names">
                    {character.episode.slice().reverse().filter((episode, idx) => idx < 5).map((episodeUrl, id) => (
                    <EpisodeNames key={id} episodeUrl={episodeUrl} />
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