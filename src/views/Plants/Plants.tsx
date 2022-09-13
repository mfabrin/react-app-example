import { useContext } from "react";
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";
import { plantsContext } from "./PlantsContext";
import { Page } from "components";

let Plants = () => {
    let { isLoading, plants } = useContext(plantsContext);

    return (
        <Page isLoading={isLoading}>
            <TableContainer>
                <Typography variant="h4" gutterBottom>My plants</Typography>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox" />
                            <TableCell>Name</TableCell>
                            <TableCell>Latin name</TableCell>
                            <TableCell>Years</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {plants.map(plant =>
                            <TableRow hover key={plant.plantId}>
                                <TableCell padding="checkbox">
                                    <img alt="plants" src={"https://picsum.photos/50"} />
                                </TableCell>
                                <TableCell>{plant.name}</TableCell>
                                <TableCell>{plant.latinName}</TableCell>
                                <TableCell>{plant.years}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Page>
    )
}

export default Plants;