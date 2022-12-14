import { Route, Switch } from "react-router-dom";

import {AppProps} from "../../models/App";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Menu from "../../pages/Menu/Menu";
import NotFound from "../../pages/NotFound/NotFound";
import React from "react";
import UnauthenticatedRoute from "./UnauthenticatedRoute";

interface RoutesProps {
    appProps: AppProps;
}

export default function Routes({appProps}: RoutesProps) {
    return (
        <Switch>
            <AuthenticatedRoute path="/" exact component={Home} appProps={appProps} />
            <AuthenticatedRoute path="/menu" exact component={Menu} appProps={appProps} />
            <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
            { /* Finally, catch all unmatched routes */ }
            <Route component={NotFound} />
        </Switch>
    );
}
