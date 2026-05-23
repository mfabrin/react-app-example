import Layout from "@components/Layout";
import { CircularProgress } from "@mui/material";
import { authContext } from "@services/Authentication";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ ...rest }) => {
	const location = useLocation();

	const { isLoading, isAuthenticated } = useContext(authContext);

	return (
		<Layout>
			{isLoading && <CircularProgress />}
			{isLoading === false && (
				<>
					{isAuthenticated === false && (
						<Navigate
							replace
							to={`/account/login?returnUrl=${location.pathname}`}
						/>
					)}
					{isAuthenticated && <React.Fragment {...rest} />}
				</>
			)}
		</Layout>
	);
};

export default PrivateRoute;
