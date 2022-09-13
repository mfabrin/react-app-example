import { Grid, Button, Stack } from "@mui/material";
import { Field } from 'formik'
import { TextField } from 'formik-mui'

let LoginForm = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={12} lg={12}>
                <Field
                    name="email"
                    type="email"
                    size="small"
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <Field
                    name="password"
                    type="password"
                    size="small"
                    component={TextField}
                />
            </Grid>

            <Grid item xs md lg />

            <Grid item>
                <Button type="submit" variant="contained">Login</Button>
            </Grid>
        </Grid>
    )
}

export default LoginForm;