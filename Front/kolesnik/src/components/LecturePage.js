import React from "react";
import placeholder from "../img/placeholder.png"

const LecturePage = () =>{

    return(
        <div className="lect-page">
            <h1>Дисципліна - Комп’ютерні мережі - Лекція 1</h1>
            <div className="lect-desc-main d-flex justify-content-center">
                <div className="lect-desc d-flex justify-content-between">
                <div>
                    <p className="lect-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
versions of Lorem Ipsum.</p>
                </div>
                <div>
                    <img src={placeholder} alt="lect-img"/>
                </div>
                </div>
            </div>
            <div className="lect-buts d-flex">
                <button className="lect-change">Редагувати</button>
                <button className="lect-del">Видалити</button>
            </div>
            <div className="push"></div>
        </div>
    );
}

export default LecturePage;