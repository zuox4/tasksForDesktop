import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(state => !!state.auth.user);

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default PrivateRoute;