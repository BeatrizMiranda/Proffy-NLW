import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList.tsx";
import TeacherForm from "./pages/TeacherForm";

function routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/study" component={TeacherList}></Route>
            <Route path="/give-classes" component={TeacherForm}></Route>
        </BrowserRouter>
    );
}

export default routes;
