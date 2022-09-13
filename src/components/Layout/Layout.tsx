import { AppBar, Toolbar, Stack, Typography, Grid } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "services";
import UserMenu from './UserMenu'

interface IProps {
    children: React.ReactNode
}

let Layout = ({ children }: IProps) => {
    let { isAuthenticated } = useContext(authContext);

    return (
        <div>
            <AppBar position="static" color="inherit" elevation={1}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item>
                            <Link to="/">
                                <img alt="plants" src={"/images/jungle-plants.jpg"} width={80} />
                            </Link>
                        </Grid>

                        {isAuthenticated &&
                            <>
                                <Grid item xs />
                                <Grid item>
                                    <UserMenu />
                                </Grid>
                            </>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>

            {children}
        </div>
    )
}

export default Layout;