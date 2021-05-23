import { Redirect, Route } from "react-router-dom";

import React from "react";
import {queryString} from "../../utils/urlHelper";

export default function UnauthenticatedRoute({ component: C, appProps, ...rest }: any) {
    const redirect = queryString("redirect");
    return (
        <Route
            {...rest}
            render={props =>
                !appProps.isAuthenticated
                    ? <C {...props} {...appProps} />
                    : <Redirect
                        to={redirect === "" || redirect === null ? "/" : redirect}
                    />}
        />
    );
}
