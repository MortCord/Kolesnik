import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import placeholder from "../img/placeholder.png"

const LabPage = ({ match, history }) => {
    const { id } = match.params;

    const [name, setName] = useState('');
    const [plot, setPlot] = useState('');
    const [fileName, setFileName] = useState('');

    useEffect(() => {
        fetch("http://localhost:8080/lab/getAll")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                const lab = result.find(lab => lab.id === parseInt(id));
                if (lab) {
                    setName(lab.name);
                    setPlot(lab.plot);
                    setFileName(lab.fileName);
                }
            });
    }, [id]);

    return (
        <div className="lab-page">
            <h1>Дисципліна - Комп’ютерні мережі - Лабораторна робота {id} - {name}</h1>
            <div className="lab-desc-main d-flex justify-content-center">
                <div className="lab-desc d-flex justify-content-between">
                    <div>
                        <p className="lab-text">{plot}</p>
                    </div>
                    <div>
                        <img src={fileName ? `http://localhost:8080/lab/images/${fileName}` : placeholder} alt="lab-img" />
                    </div>
                </div>
            </div>
            <div className="lab-buts d-flex">
                <Link to={"/editlab/" + id}><button className="lab-change">Редагувати</button></Link>
                <button onClick={() => {
                    fetch("http://localhost:8080/lab/delete/" + id, {
                        method: "DELETE",
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .then(() => {
                            history.push("/labworks");
                        });
                }} className="lab-del">Видалити</button>
            </div>
            <div className="push"></div>
        </div>
    );
}

export default withRouter(LabPage);
