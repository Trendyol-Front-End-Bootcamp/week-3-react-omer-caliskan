import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharacterList from '../character/CharacterList';
import PageNotFound from '../notfound/PageNotFound';
import '../../assets/css/filterBar.css';

function FilterBar(){
const [gender, setGender] = useState("");
const [status, setStatus] = useState("");
const [filterChar, setFilterChar] = useState([]);
const [error, SetError] = useState(true);

const filterquery = `?${gender!=="All" ? "gender=" + gender + "&" : ""}${status!=="All" ? "status=" + status : ""}`;
    
    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${filterquery}`)
            .then(response => {
                setFilterChar(response.data.results)
                SetError(true)})
            .catch((error) => SetError(false))
    }, [filterquery, error]);

    return(
        <div>
        <div className="FilterBar">
            <div>
                <span>Gender:</span>  
                <select onChange={(s) => setGender(s.target.value)}>
                    <option>All</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Genderless</option>
                    <option>ForTest404</option>
                    <option>Unknown</option>
                </select>
            </div>

            <div>
             <span>Status:</span>
            <select onChange={(s) => setStatus(s.target.value)}>
                <option>All</option>
                <option>Alive</option>
                <option>Dead</option>
                <option>Unknown</option>
            </select>
        </div>

        </div>
        { 
        error ? <CharacterList characters={filterChar}/> : <PageNotFound />
        }
        </div>
    );
}

export default FilterBar;