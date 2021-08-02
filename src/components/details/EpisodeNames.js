import React, { useState } from 'react';
import { getEpisodeName } from "../../service/RickandMortyService"

function EpisodeNames( {episodeUrl, epNameforTest} ){
const [episodeName, setEpisodeName] = useState("");

const fetch = async () => {
        const data = await getEpisodeName(episodeUrl);
        setEpisodeName(data)
      }

      fetch();

return(
    <li>{epNameforTest || episodeName}</li>
)

}

export default EpisodeNames;