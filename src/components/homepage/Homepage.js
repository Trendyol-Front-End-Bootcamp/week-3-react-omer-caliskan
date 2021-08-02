import React, {useEffect, useState} from 'react';
import CharacterList from '../character/CharacterList';
import PageNotFound from '../notfound/PageNotFound';
import '../../assets/css/homepage.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../layout/Loading';
import { getCharactersByPageandFilter } from "../../service/RickandMortyService"

function Homepage({test}){
const [gender, setGender] = useState("");
const [status, setStatus] = useState("");
const [characters, setCharacters] = useState([]);
const [error, setError] = useState(true);
const [page, setPage] = useState(1);
const [hasMore, setHasMore] = useState(true);
const [loading, setLoading] = useState(true);

    React.useEffect(() => {
         const fetch = async () => {
            try {
                test ? setLoading(true) : setLoading(false)
                const data = await getCharactersByPageandFilter(page, gender, status);
                setCharacters([...characters, ...data.results])
                setError(true)
                setHasMore(data.info.next)
                setLoading(true)
            } catch (error) {
                setError(false)
            }
            
        }
         
        fetch();
    }, [gender, status, page]);

    return(
        loading ? <div>
        <div className="FilterBar">
            <div>
                <span>Gender:</span>  
                <select onChange={(s) => {setGender(s.target.value); setPage(1); setCharacters([])}}>
                    <option>All</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Genderless</option>
                    <option>Unknown</option>
                    <option>ForTest404</option>
                </select>
            </div>

            <div>
             <span>Status:</span>
            <select onChange={(s) => {setStatus(s.target.value); setPage(1); setCharacters([])}}>
                <option>All</option>
                <option>Alive</option>
                <option>Dead</option>
                <option>Unknown</option>
            </select>
        </div>

        </div>
        { 
            
        error ? <InfiniteScroll
            dataLength={characters.length}
            next={() => setPage(page+1)}
            hasMore={hasMore}
            loader={<Loading />}
            > <CharacterList characters={characters} /> </InfiniteScroll> : <PageNotFound />
        }
        </div> : <Loading />
    );
}

export default Homepage;