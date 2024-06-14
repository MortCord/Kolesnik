import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"

const Header = () =>(
    <header>
        <div className="lv1">
            <div className="d-flex align-items-center header-text">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                    <h1>Сайт викладача спецдисциплін Колесника А.І.</h1>
            </div>
        </div>
        <nav>
            <div className="nav-el">
                <Link className="nav-link" to="/#portfolio">Портфоліо</Link>
                <Link className="nav-link" to="/addlect">Додати нову лекцію</Link>
                <Link className="nav-link" to="/addlab">Додати нову лабораторну роботу</Link>
            </div>
        </nav>
    </header>
)

export default Header;