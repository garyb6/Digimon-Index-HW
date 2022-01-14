import React from "react";
import './DigimonList.css';
import Digimon from "./Digimon";




const DigimonList = ({digimonList, onDigimonClick}) => {

    const listofDigimon = digimonList.map((digimon, index) => {
        return <Digimon key={index} digimon={digimon} onDigimonClick={onDigimonClick}/>
    })

    return (
        <>
        <ul className="fullList">{listofDigimon}</ul>
        </>
    )
}

export default DigimonList;