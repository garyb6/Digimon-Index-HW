import React from "react";
import './DigimonList.css';
import DigimonDetails from "./DigimonDetails";




const DigimonList = ({digimonList, onDigimonClick}) => {

    const favDigimon = digimonList.map((digimon, index) => {
        return <Digimon key={index} digimon={digimon} onDigimonClick={onDigimonClick}/>
    })

    return (
        <>
        <ul className="fullList">{listofDigimon}</ul>
        </>
    )
}

export default FavDigimonList;