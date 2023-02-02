import { useContext } from "react";
import { Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { plantsContext } from "./PlantsContext";
import { Page } from "components";

let Plants = () => {
    let { isLoading, plants } = useContext(plantsContext);

    return (
        <Page isLoading={isLoading}>
            <Typography variant="h4" gutterBottom>My plants</Typography>
            <Grid container>
                {plants.map((plant, idx) =>
                    <Grid item key={plant.plantId}>
                        <Card>
                            <CardMedia
                                component="img"
                                height={144}
                                width={200}
                                image={`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200/144`}
                                alt="plant"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {plant.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {plant.latinName} {plant.years} years old
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Page>
    )
}

export default Plants;