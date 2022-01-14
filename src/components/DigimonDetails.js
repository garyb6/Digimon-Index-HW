import React from "react";
import './DigimonList.css'

const DigimonDetails = ({digimon}) => {


    return (
            <div className="ExpandedCard">
                <img src={digimon.img}></img>
                <h3>{digimon.name}</h3>
                <h4>{digimon.level}</h4>
            </div>
    )
}

export default DigimonDetails;