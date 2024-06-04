import React from "react";

const EditLab = () =>{

    return(
        <div className="lect-page">
            <h1>Редагувати лабораторну роботу</h1>
            <div className="add-lect d-flex justify-content-center">
                <form className="d-flex flex-column">
                    <div className="inp">
                        <span>Назва лабораторної роботи</span>
                        <div>
                            <input placeholder="Назва" required />
                        </div>
                    </div>
                    <div className="inp">
                        <span>Лекційний матеріал</span>
                        <div>
                            <textarea placeholder="Text here..."></textarea>
                        </div>
                    </div>
                    <div className="inp">
                        <span>Фото</span>
                        <input type="file" accept="image/png, image/jpeg" />
                    </div>
                    <div>
                        <button className="add-but">Додати</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditLab;