import React, {useState, useEffect} from "react";
import DigimonList from '../components/DigimonList';
import "../index.css"
import DigimonDetails from '../components/DigimonDetails'
import FilteredDigimon from "../components/FilteredDigimon";

const DigimonContainer = () => {

    const [digimonList, setDigimonList] = useState([]);
    const [selectedDigimon, setSelectedDigimon] = useState(null);
    const [filteredDigimon, setFilteredDigimon] = useState([]);

    useEffect(() => {
        fetchDigimon()},[]);
    
    const fetchDigimon = () => {
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(res => res.json())
        .then(data => setDigimonList(data));
    }


    
    const filter = (searchTerm) => {
        const lowerSearch = searchTerm.toLowerCase();
        const filteredDigimon = digimonList.filter((digimon) => {
        return digimon.name.toLowerCase().indexOf(lowerSearch) > -1;
        });
        setFilteredDigimon(filteredDigimon);
    }

    const onDigimonClick = (digimon) => {
        setSelectedDigimon(digimon)
    }
    return(

        <div className="flexbox">
            <h1>Pick your Favourite Digimon!</h1>
            <FilteredDigimon handleChange={filter} />
            <DigimonList filteredDigimon={filteredDigimon} digimonList={digimonList} onDigimonClick={onDigimonClick}/>
            {selectedDigimon ? <DigimonDetails digimon={selectedDigimon}/> : null}
        </div>
    )
}

export default DigimonContainer;