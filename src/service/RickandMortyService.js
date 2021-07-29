const axios = require('axios')

export const getCharacterById = async (charId) => {

  let character
  
  await axios
      .get(`https://rickandmortyapi.com/api/character/${charId}`)
      .then(({data}) => {character = data})

      return character;
}

export const getCharactersByPageandFilter = async (page, gender, status) => {

  let characters = []
  
  let query = `?page=${page}${gender!=="All" ? "&gender=" + gender : ""}${status!=="All" ? "&status=" + status : ""}`;

  await axios
      .get(`https://rickandmortyapi.com/api/character/${query}`)
      .then(({data}) => {characters = data})

  return characters;
}

export const getEpisodeName = async (episodesUrl) => {

  let episodeName;

  await axios
        .get(`${episodesUrl}`)
        .then(({data}) => {episodeName = data.name})
  
  return episodeName;
}