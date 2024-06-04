import React from "react";
import { Link } from "react-router-dom";

const Header = () =>(
    <header>
        <div className="lv1">
            <div className="d-flex align-items-center header-text">
                    <h1>Сайт викладача спецдисциплін Колесника А.І.</h1>
            </div>
        </div>
        <nav>
            <div className="nav-el">
                <Link className="nav-link" to="/#portfolio">Портфоліо</Link>
                <Link className="nav-link" to="/">Дисципліни</Link>
                <Link className="nav-link" to="/addlect">Додати нову лекцію</Link>
                <Link className="nav-link" to="/">Додати нову лабораторну роботу</Link>
            </div>
        </nav>
    </header>
)

export default Header;