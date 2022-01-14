import React from "react";
import Digimon from "./Digimon";




const DigimonList = ({digimonList}) => {

    const listofDigimon = digimonList.map((digimon, index) => {
        return <Digimon key={index} digimon={digimon}/>
    })

    return (
        <>
        <ul>{listofDigimon}</ul>
        </>
    )
}

export default DigimonList;