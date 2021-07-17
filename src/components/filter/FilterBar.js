import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharacterList from '../character/CharacterList';
import PageNotFound from '../notfound/PageNotFound';
import '../../assets/css/filterBar.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../layout/Loading';

function FilterBar(){
const [gender, setGender] = useState("");
const [status, setStatus] = useState("");
const [characters, setCharacters] = useState([]);
const [error, setError] = useState(true);
const [page, setPage] = useState(1);
const [hasMore, setHasMore] = useState(true);
const [loading, setLoading] = useState(false);

    useEffect(() => {
         const filterquery = `?page=${page}${gender!=="All" ? "&gender=" + gender : ""}${status!=="All" ? "&status=" + status : ""}`;
        
        axios
            .get(`https://rickandmortyapi.com/api/character/${filterquery}`)
            .then(response => {
                setCharacters([...characters, ...response.data.results])
                setError(true)
                setHasMore(response.data.info.next)
                setLoading(true)
                })
            .catch((error) => setError(false));
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

export default FilterBar;