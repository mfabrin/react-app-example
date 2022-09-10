import { AppBar, Toolbar, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface IProps {
    children: React.ReactNode
}

let Layout = ({ children }: IProps) => {
    return (
        <div>
            <AppBar position="static" color="inherit" elevation={1}>
                <Toolbar>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Link to="/">
                            <img alt="plants" src={"https://picsum.photos/50"} />
                        </Link>

                        <Link to="/plants">
                            <Typography variant="body2">
                                <b>PLANTS</b>
                            </Typography>
                        </Link>
                    </Stack>
                </Toolbar>
            </AppBar>

            {children}
        </div>
    )
}

export default Layout;