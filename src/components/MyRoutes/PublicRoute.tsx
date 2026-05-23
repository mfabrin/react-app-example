import Layout from "@components/Layout";
import { CircularProgress } from "@mui/material";
import { authContext } from "@services/Authentication";
import React, { useContext } from "react";

const PublicRoute = ({ ...rest }) => {
	const { isLoading } = useContext(authContext);

	return (
		<Layout>
			{isLoading && <CircularProgress />}
			{isLoading === false && <React.Fragment {...rest} />}
		</Layout>
	);
};

export default PublicRoute;
