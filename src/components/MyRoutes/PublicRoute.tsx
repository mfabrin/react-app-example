import { CircularProgress } from "@mui/material";
import Layout from "@components/Layout";
import React, { useContext } from "react";
import { authContext } from "@services/Authentication";

const PublicRoute = ({ ...rest }) => {
    const { isLoading } = useContext(authContext);

    return (
        <Layout>
            {isLoading && <CircularProgress />}
            {isLoading === false && <React.Fragment {...rest} />}
        </Layout>
    )
}

export default PublicRoute;