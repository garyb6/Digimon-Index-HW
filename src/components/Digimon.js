import React from "react";
import './DigimonList.css';



const Digimon = ({digimon, onDigimonClick}) => {

    const handleClick = () => onDigimonClick(digimon);
    
    return (
        <div className="Name">
            <li onClick={handleClick}>{digimon.name}
            </li>
        </div>
    )
}

export default Digimon;