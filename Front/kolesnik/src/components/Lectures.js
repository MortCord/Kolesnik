import React from "react";
import Lecture from "./Lecture";

const Lectures = () =>{

    return(
        <div className="lect-page">
            <h1>Дисципліна - Комп’ютерні мережі</h1>
            <div className="lectures d-flex d-flex justify-content-around column">
                <Lecture />
                <Lecture />
                <Lecture />
                <Lecture />
                <Lecture />
                <Lecture />
                <Lecture />
                <Lecture />
                <Lecture />
            </div>
            <div className="push"></div>
        </div>
    );
}

export default Lectures;