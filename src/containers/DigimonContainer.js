import React, {useState, useEffect} from "react";
import DigimonList from '../components/DigimonList';
import "../index.css"
import DigimonDetails from '../components/DigimonDetails'

const DigimonContainer = () => {

    const [digimonList, setDigimonList] = useState([]);
    const [selectedDigimon, setSelectedDigimon] = useState(null);

    useEffect(() => {
        fetchDigimon()},[]);
    
    const fetchDigimon = () => {
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(res => res.json())
        .then(data => setDigimonList(data));
    }

    const onDigimonClick = (digimon) => {
        setSelectedDigimon(digimon)
    }
    return(

        <div className="flexbox">
            <h1>Pick your Favourite Digimon!</h1>
            <DigimonList digimonList={digimonList} onDigimonClick={onDigimonClick}/>
            {selectedDigimon ? <DigimonDetails digimon={selectedDigimon}/> : null}
        </div>
    )
}

export default DigimonContainer;