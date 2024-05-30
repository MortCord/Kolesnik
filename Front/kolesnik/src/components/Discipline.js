import React from "react";
import { Link } from "react-router-dom";

const Discipline = (props) =>(
    <div className="disc-card">
        <div className="disc-text">
            <h2>Discipline</h2>
            <p>description</p>
        </div>
        <Link to="/">Переглянути лекції</Link>

    </div>
)
export default Discipline;