import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom'

function CharacterList({characters}) {/*
    let [characters, setCharacters] = useState([]);
    useEffect(()=> {
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then(response => {
                setCharacters(response.data.results);
            });
    }, []);

    if(filterChar){
        characters = filterChar;
    }*/

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