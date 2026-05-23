import { Error404, Plants } from "@views";
import { Login } from "@views/Account";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Navigations = () => {
	return (
		<Routes>
			<Route path="/" element={<PrivateRoute children={<Plants />} />} />
			<Route path="/plants" element={<PrivateRoute children={<Plants />} />} />

			<Route
				path="/account/login"
				element={<PublicRoute children={<Login />} />}
			/>

			<Route
				path="/error404"
				element={<PrivateRoute children={<Error404 />} />}
			/>

			<Route
				path="*"
				element={<PrivateRoute children={<Navigate to="/error404" />} />}
			/>
		</Routes>
	);
};

export default Navigations;
