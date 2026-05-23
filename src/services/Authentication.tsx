import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";

interface IAuthContext {
	isLoading: boolean;
	isAuthenticated: boolean;
	currentUser: IUser | null;

	login: (email: string, password: string) => boolean;
	logout: () => boolean;
}

interface IUser {
	email: string;
	firstName: string;
	lastName: string;
}

export const authContext = React.createContext({} as IAuthContext);

const { Provider } = authContext;

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const { enqueueSnackbar } = useSnackbar();

	const [isLoading, setLoading] = useState(true);
	const [isAuthenticated, setAuthenticated] = useState(false);
	const [currentUser, setCurrentUser] = useState<IUser | null>(null);


	// Fake simulation
	const getAuthenticatedUser = () => {
		try {
			setLoading(true);

			const currentUser = localStorage.getItem("demo.plants.user");
			if (!currentUser) setAuthenticated(false);
			else {
				setCurrentUser(JSON.parse(currentUser));
				setAuthenticated(true);
			}

			setLoading(false);
		} catch (err) {
			setAuthenticated(false);
			setCurrentUser(null);
			setLoading(false);
		}
	};
	
	useEffect(() => getAuthenticatedUser(), [getAuthenticatedUser]);


	const login = (email: string, password: string) => {
		if (email !== "demo-user@gmail.com") {
			enqueueSnackbar("User does not exist", { variant: "error" });
			return false;
		}

		if (password !== "Demo$Password!") {
			enqueueSnackbar("Password is not valid", { variant: "error" });
			return false;
		}

		try {
			const currentUser = {
				email,
				firstName: "Demo",
				lastName: "User",
			};

			localStorage.setItem("demo.plants.user", JSON.stringify(currentUser));
			getAuthenticatedUser();
			return true;
		} catch (err) {
			enqueueSnackbar("Something went wrong while login. Please retry", {
				variant: "error",
			});
			return false;
		}
	};

	const logout = () => {
		try {
			localStorage.removeItem("demo.plants.user");
			setCurrentUser(null);
			getAuthenticatedUser();
			return true;
		} catch (err) {
			enqueueSnackbar("Something went wrong while logou. Please retry", {
				variant: "error",
			});
			return false;
		}
	};

	return (
		<Provider
			value={{
				isLoading,
				isAuthenticated,
				currentUser,

				login,
				logout,
			}}
		>
			{children}
		</Provider>
	);
};

export default AuthProvider;
