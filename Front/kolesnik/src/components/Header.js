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
                <Link className="nav-link" to="/">Портфоліо</Link>
                <Link className="nav-link" to="/">Дисципліни</Link>
                <Link className="nav-link" to="/">Додати нову лекцію</Link>
            </div>
        </nav>
    </header>
)

export default Header;