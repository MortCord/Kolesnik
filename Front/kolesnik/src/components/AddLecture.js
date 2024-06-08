import React, { useState } from "react";

const AddLecture = () => {
    const [name, setName] = useState('');
    const [plot, setPlot] = useState('');
    const [file, setFile] = useState(null);
    const [res, setRes] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleClick = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("plot", plot);
        if (file) {
            formData.append("file", file);
        }

        try {
            const response = await fetch("http://localhost:8080/lek/addWithFile", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                console.log("Lecture added successfully");
                setRes("Lecture added successfully");
            } else {
                console.error("Error adding lecture");
                setRes("An error occurred");
            }
            setName('');
            setPlot('');
            setFile(null);
        } catch (error) {
            console.error("Error:", error);
            setRes("An error occurred");
        }
    };

    return (
        <div className="lect-page">
            <h1>Add Lecture</h1>
            <div className="add-lect d-flex justify-content-center">
                <form className="d-flex flex-column" onSubmit={handleClick}>
                    <div className="inp">
                        <span>Lecture Name</span>
                        <div>
                            <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" required />
                        </div>
                    </div>
                    <div className="inp">
                        <span>Lecture Material</span>
                        <div>
                            <textarea onChange={(e) => setPlot(e.target.value)} value={plot} placeholder="Text here..." required></textarea>
                        </div>
                    </div>
                    <div className="inp">
                        <span>Photo</span>
                        <input type="file" accept="image/png, image/jpeg" onChange={handleFileChange} />
                    </div>
                    <div>
                        <button type="submit" className="add-but">Add</button>
                    </div>
                </form>
            </div>
            <span>{res}</span>
        </div>
    );
};

export default AddLecture;
