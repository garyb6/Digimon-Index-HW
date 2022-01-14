import React from "react";



const Digimon = ({digimon}) => {

    return (
        <>
            <li>{digimon.name} {digimon.level}</li>
        </>
    )
}

export default Digimon;