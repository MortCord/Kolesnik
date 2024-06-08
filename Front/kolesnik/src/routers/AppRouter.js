import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Lectures from "../components/Lectures";
import LecturePage from "../components/LecturePage";
import LabWorks from "../components/LabWorks";
import LabPage from "../components/LabPage";
import AddLecture from "../components/AddLecture";
import EditLecture from "../components/EditLecture";
import AddLab from "../components/AddLab";
import EditLab from "../components/EditLab";

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Main} exact={true} />
                <Route path="/lectures" component={Lectures} />
                <Route path="/lecture/:id" component={LecturePage} />
                <Route path="/labworks" component={LabWorks} />
                <Route path="/labpage/:id" component={LabPage} />
                <Route path="/addlect" component={AddLecture} />
                <Route path="/editlect/:id" component={EditLecture} />
                <Route path="/addlab" component={AddLab} />
                <Route path="/editlab/:id" component={EditLab} />
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
)

export default AppRouter;