import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EpisodeNames( {episode} ){
const [episodes, setEpisodes] = useState([]);

useEffect( () => {
    axios
        .get(episode)
        .then(response => {setEpisodes(response.data)})
}, [episode])

return(
    <li>{episodes.name}</li>
)

}

export default EpisodeNames;