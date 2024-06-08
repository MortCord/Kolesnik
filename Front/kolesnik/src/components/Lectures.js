import React, { useEffect, useState } from "react";
import Lecture from "./Lecture";


const Lectures = () =>{

    const [lekcii, setLekcii] = useState([]);

useEffect(()=>{
    fetch("http://localhost:8080/lek/getAll")
    .then(res=>res.json())
    .then((result)=>{
        console.log(result);
        setLekcii(result);
    })
},[]);

    return(
        <div className="lect-page">
            <h1>Дисципліна - Комп’ютерні мережі</h1>
            <div className="lectures d-flex d-flex justify-content-around column">
                {lekcii.map(lekcia=>(
                    <Lecture name={lekcia.name} link={`/lecture/${lekcia.id}`} />
                ))}
            </div>
            <div className="push"></div>
        </div>
    );
}

export default Lectures;