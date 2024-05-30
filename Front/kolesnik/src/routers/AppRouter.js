import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Main} exact={true} />
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
)

export default AppRouter;