import React, { useState, useEffect } from "react";
import placeholder from "../img/placeholder.png";
import { Link, withRouter } from "react-router-dom";

const LecturePage = ({ match, history }) => {
    const [name, setName] = useState('');
    const [plot, setPlot] = useState('');
    const [fileName, setFileName] = useState('');

    const { id } = match.params;

    useEffect(() => {
        fetch("http://localhost:8080/lek/getAll")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                const lecture = result.find(lekcia => lekcia.id === parseInt(id));
                if (lecture) {
                    setName(lecture.name);
                    setPlot(lecture.plot);
                    setFileName(lecture.fileName);
                }
            })
            .catch(error => {
                console.error("Error fetching lecture:", error);
            });
    }, [id]);

    const handleDelete = () => {
        fetch(`http://localhost:8080/lek/delete/${id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {
            history.push('/lectures');
        })
        .catch(error => {
            console.error("Error deleting lecture:", error);
        });
    };

    return (
        <div className="lect-page">
            <h1>Дисципліна - Комп’ютерні мережі - Лекція {id} - {name}</h1>
            <div className="lect-desc-main d-flex justify-content-center">
                <div className="lect-desc d-flex justify-content-between">
                    <div>
                        <p className="lect-text">{plot}</p>
                    </div>
                    <div>
                        <img 
                            src={fileName ? `http://localhost:8080/lek/images/${fileName}` : placeholder} 
                            alt="lect-img" 
                        />
                    </div>
                </div>
            </div>
            <div className="lect-buts d-flex">
                <Link to={`/editlect/${id}`}>
                    <button className="lect-change">Редагувати</button>
                </Link>
                <button onClick={handleDelete} className="lect-del">Видалити</button>
            </div>
            <div className="push"></div>
        </div>
    );
};

export default withRouter(LecturePage);
