import React from "react";
import LabWork from "./LabWork";

const LabWorks = () =>{

    return(
        <div className="lab-page">
            <h1>Дисципліна - Комп’ютерні мережі</h1>
            <div className="labs d-flex d-flex justify-content-around column">
                <LabWork />
                <LabWork />
                <LabWork />
                <LabWork />
                <LabWork />
                <LabWork />
                <LabWork />
                <LabWork />
            </div>
            <div className="push"></div>
        </div>
    );
}

export default LabWorks;