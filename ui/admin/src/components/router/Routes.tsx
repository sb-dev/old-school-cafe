import { Route, Switch } from "react-router-dom";

import {AppProps} from "../../models/App";
import AppliedRoute from "./AppliedRoute";
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
            <AppliedRoute path="/" exact component={Home} appProps={appProps} />
            <AppliedRoute path="/menu" exact component={Menu} appProps={appProps} />
            <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
            {/* <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
            <UnauthenticatedRoute path="/search" exact component={Search} appProps={appProps} /> */}
            { /* Finally, catch all unmatched routes */ }
            <Route component={NotFound} />
        </Switch>
    );
}
