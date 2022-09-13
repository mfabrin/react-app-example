import { CircularProgress } from "@mui/material";
import { Layout } from "components";
import React, { useContext } from "react";
import { authContext } from "services";

let PublicRoute = ({ ...rest }) => {
    let { isLoading } = useContext(authContext);

    return (
        <Layout>
            {isLoading && <CircularProgress />}
            {isLoading === false && <React.Fragment {...rest} />}
        </Layout>
    )
}

export default PublicRoute;