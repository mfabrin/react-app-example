import { CircularProgress } from "@mui/material";
import { Layout } from "components";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "services";

let PrivateRoute = ({ ...rest }) => {

    let location = useLocation();

    let { isLoading, isAuthenticated } = useContext(authContext);

    return (
        <Layout>
            {isLoading && <CircularProgress />}
            {isLoading === false &&
                <>
                    {isAuthenticated === false && <Navigate replace to={`/account/login?returnUrl=${location.pathname}`} />}
                    {isAuthenticated && <React.Fragment {...rest} />}
                </>
            }
        </Layout>
    )
}

export default PrivateRoute;