import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./page/test"
import TestDocx from "./page/docxtemplater"


export function WebRoutes() {
    return <Router>
        <Switch>
            <Route exact path={"/"} component={Test}>

            </Route>
            <Route exact path={"/docx"} component={TestDocx}>

            </Route>
        </Switch>
    </Router>
}