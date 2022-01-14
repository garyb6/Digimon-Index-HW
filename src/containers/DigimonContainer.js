import React, {useState, useEffect} from "react";
import DigimonList from '../components/DigimonList';

const DigimonContainer = () => {

    const [digimonList, setDigimonList] = useState([]);

    useEffect(() => {
        fetchDigimon()},[]);
    
    const fetchDigimon = () => {
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(res => res.json())
        .then(data => setDigimonList(data));

    }
    return(

        <>
            <h2></h2>
            <DigimonList digimonList={digimonList}/>
        </>
    )
}

export default DigimonContainer;