import { Container, Grid } from "@mui/material";

let Error404 = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs>
                    Route not found
                </Grid>
            </Grid>
        </Container>
    )
}

export default Error404;