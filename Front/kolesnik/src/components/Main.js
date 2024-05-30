import React from "react";
import Discipline from "./Discipline";

const Main = () =>{

    return(
        <main>
        <div className="portfolio">
            <h2>Портфоліо</h2>
        </div>
        <div className="port-next">
            <div className="plot">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        <div>
            <div className="discipline">
                <h2>Дисципліни</h2>
            </div>
            <div className="disc-cards d-flex justify-content-around column">
                <Discipline/>
                <Discipline/>
                <Discipline/>
                <Discipline/>
                <Discipline/>
                <Discipline/>
            </div>
        </div>
    </main>
    )
}

export default Main;