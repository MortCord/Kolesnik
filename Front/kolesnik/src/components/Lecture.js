import React from "react";
import { Link } from "react-router-dom";

const Lecture = (props) =>(
    <div className="lect-card">
        <div className="lect-text">
            <h2>{props.name ? props.name : 'Lecture'}</h2>
        </div>
        <Link to="/">Переглянути лекцію</Link>

    </div>
)
export default Lecture;