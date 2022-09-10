import { Grid, Typography } from "@mui/material";
import { Page } from "components";

let Homepage = () => {
    return (
        <Page isLoading={false}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Typography>Hello world React!</Typography>
                </Grid>
            </Grid>
        </Page>
    )
}

export default Homepage;