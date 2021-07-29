import React, { useEffect, useState } from 'react';
import { getEpisodeName } from "../../service/RickandMortyService"

function EpisodeNames( {episodeUrl} ){
const [episodeName, setEpisodeName] = useState("");

useEffect( () => {
    const fetch = async () => {
        const data = await getEpisodeName(episodeUrl);
        setEpisodeName(data)
      }

      fetch();
}, [episodeUrl])

return(
    <li>{episodeName}</li>
)

}

export default EpisodeNames;