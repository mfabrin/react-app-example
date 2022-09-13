import React, { useEffect, useState } from "react";
import { useSnackbar } from 'notistack';

interface IAuthContext {
    isLoading: boolean
    isAuthenticated: boolean
    currentUser: IUser | null

    login: (email: string, password: string) => boolean
    logout: () => boolean
}

interface IUser {
    email: string
    firstName: string
    lastName: string
}

export let authContext = React.createContext({} as IAuthContext);

let { Provider } = authContext;

let AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    let { enqueueSnackbar } = useSnackbar();

    let [isLoading, setLoading] = useState(true);
    let [isAuthenticated, setAuthenticated] = useState(false);
    let [currentUser, setCurrentUser] = useState<IUser | null>(null);

    useEffect(() => getAuthenticatedUser(), [])

    // Fake simulation
    let getAuthenticatedUser = () => {
        try {
            setLoading(true);

            let currentUser = localStorage.getItem("demo.plants.user");
            if (!currentUser)
                setAuthenticated(false);
            else {
                setCurrentUser(JSON.parse(currentUser))
                setAuthenticated(true);
            }

            setLoading(false)

        } catch (err) {
            setAuthenticated(false);
            setCurrentUser(null)
            setLoading(false)
        }
    }

    let login = (email: string, password: string) => {
        if (email !== "demo-user@gmail.com") {
            enqueueSnackbar("User does not exist", { variant: 'error' })
            return false;
        }

        if (password !== "Demo$Password!") {
            enqueueSnackbar("Password is not valid", { variant: 'error' })
            return false;
        }

        try {
            let currentUser = {
                email,
                firstName: 'Demo',
                lastName: 'User'
            }

            localStorage.setItem("demo.plants.user", JSON.stringify(currentUser));
            getAuthenticatedUser();
            return true;

        } catch (err) {
            enqueueSnackbar("Something went wrong while login. Please retry", { variant: 'error' })
            return false;
        }
    }

    let logout = () => {
        try {
            localStorage.removeItem("demo.plants.user");
            setCurrentUser(null);
            getAuthenticatedUser();
            return true;
        } catch (err) {
            enqueueSnackbar("Something went wrong while logou. Please retry", { variant: 'error' })
            return false;
        }
    }


    return (
        <Provider
            value={{
                isLoading,
                isAuthenticated,
                currentUser,

                login,
                logout
            }}
        >
            {children}
        </Provider>
    )
}

export default AuthProvider;