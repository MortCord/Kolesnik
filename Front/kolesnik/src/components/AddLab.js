import React, { useState } from "react";

const AddLab = () => {
    const [name, setName] = useState('');
    const [plot, setPlot] = useState('');
    const [file, setFile] = useState(null);
    const [res, setRes] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleClick = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("plot", plot);
        formData.append("file", file);

        fetch("http://localhost:8080/lab/addWithFile", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                console.log("Лабораторна робота додана успішно");
                setRes("Лабораторна робота додана успішно");
            } else {
                console.error("error");
                setRes("Сталася помилка");
            }
            setName('');
            setPlot('');
            setFile(null);
        })
        .catch(error => {
            console.error("error:", error);
            setRes("Сталася помилка");
        });
    }

    return (
        <div className="lect-page">
            <h1>Додати лабораторну роботу</h1>
            <div className="add-lect d-flex justify-content-center">
                <form className="d-flex flex-column">
                    <div className="inp">
                        <span>Назва лабораторної роботи</span>
                        <div>
                            <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Назва" required />
                        </div>
                    </div>
                    <div className="inp">
                        <span>Лекційний матеріал</span>
                        <div>
                            <textarea onChange={(e) => setPlot(e.target.value)} value={plot} placeholder="Text here..."></textarea>
                        </div>
                    </div>
                    <div className="inp">
                        <span>Фото</span>
                        <input type="file" accept="image/png, image/jpeg" onChange={handleFileChange} />
                    </div>
                    <div>
                        <button onClick={handleClick} className="add-but">Додати</button>
                    </div>
                </form>
            </div>
            <span>{res}</span>
        </div>
    );
}

export default AddLab;
