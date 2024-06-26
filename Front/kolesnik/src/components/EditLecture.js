import React from "react";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";

const EditLecture = ({match, history}) =>{

    const [name, setName] = useState('');
    const [plot, setPlot] = useState('');
    const [fileName, setFileName] = useState(null);
    const [res, setRes] = useState('');


useEffect(()=>{
    fetch("http://localhost:8080/lek/getAll")
    .then(res=>res.json())
    .then((result)=>{
        console.log(result);
        const lecture = result.find(lekcia => lekcia.id === parseInt(id));
        if(lecture){
            setName(lecture.name);
            setPlot(lecture.plot);
            setFileName(lecture.fileName);
        }
    })
},[]);

    const { id } = match.params;

    const handleClick = (e) =>{
        e.preventDefault();
        const lecture = {
            "name":name,
            "plot":plot,
            "fileName":fileName
        }

        fetch("http://localhost:8080/lek/update/" + id,{
            method:"PUT",
            headers: {'Content-Type':"application/json"},
            body: JSON.stringify(lecture)
        })
        .then(response => {
            if (response.ok){
                console.log("Програма додана успішно");
                setRes("Лекція змінена успішно");
                history.push("/lecture/"+id);
            }else{
                console.error("error");
                setRes("Сталася помилка");
            }
            setName('');
            setPlot('');
            setFileName('');
        })
        .catch(error => {
            console.error("error:", error);
        })
    }

    return(
        <div className="lect-page">
            <h1>Редагувати лекцію</h1>
            <div className="add-lect d-flex justify-content-center">
                <form className="d-flex flex-column">
                    <div className="inp">
                        <span>Назва лекції</span>
                        <div>
                            <input onChange={(e)=>setName(e.target.value)} value={name} placeholder="Назва" required />
                        </div>
                    </div>
                    <div className="inp">
                        <span>Лекційний матеріал</span>
                        <div>
                            <textarea onChange={(e)=>setPlot(e.target.value)} value={plot} placeholder="Text here..."></textarea>
                        </div>
                    </div>
                    <div className="inp">
                        <span>Фото</span>
                        <input type="file" accept="image/png, image/jpeg" />
                    </div>
                    <div>
                        <button onClick={handleClick} className="add-but">Зберегти зміни</button>
                    </div>
                </form>
            </div>
            <span>{res}</span>
            <div className="push"></div>
        </div>
    );
}

export default withRouter(EditLecture);