import React from "react";
import { Link } from "react-router-dom";

const LabWork = (props) =>(
    <div className="lab-card">
        <div className="lab-text">
            <h2>{props.name ? props.name : 'LabWork'}</h2>
        </div>
        <Link to={props.link}>Переглянути лабораторну роботу</Link>

    </div>
)
export default LabWork;