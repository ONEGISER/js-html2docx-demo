import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./page/test"

export function WebRoutes() {
    return <Router>
        <Switch>
            <Route exact path={"/"} component={Test}>

            </Route>
        </Switch>
    </Router>
}