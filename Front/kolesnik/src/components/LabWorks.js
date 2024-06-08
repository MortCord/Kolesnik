import React, { useEffect, useState } from "react";
import LabWork from "./LabWork";

const LabWorks = () =>{

    const [labs, setLabs] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/lab/getAll")
        .then(res=>res.json())
        .then((result)=>{
            console.log(result);
            setLabs(result);
        })
    },[]);

    return(
        <div className="lab-page">
            <h1>Дисципліна - Комп’ютерні мережі</h1>
            <div className="labs d-flex d-flex justify-content-around column">
                {labs.map(lab=>(
                    <LabWork name={lab.name} link={"/labpage/" + lab.id} />
                ))}
            </div>
            <div className="push"></div>
        </div>
    );
}

export default LabWorks;