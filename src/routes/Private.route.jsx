import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Layout from '../layout/Layout'

const PrivateRoute = ({ component: Component, ...rest }) => {
    let isAuth = false

    return (
        <Route {...rest} render={matchProps => (
            <Layout>
                {
                    isAuth ?
                        <Component {...matchProps} />
                        :
                        <Redirect to="/" />
                }
            </Layout>
        )} />
    )
}

export default PrivateRoute


