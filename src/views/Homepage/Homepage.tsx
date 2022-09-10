import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

let Homepage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} alignContent="center">
                <Grid item xs>
                    <Typography>Hello world React!</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Homepage;