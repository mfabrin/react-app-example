import { Card, CardContent, CardHeader, Container, Grid } from "@mui/material";
import { Formik, Form } from 'formik'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "services";
import * as yup from 'yup';
import { LoginForm } from './components';

let Login = () => {

    let navigate = useNavigate();

    let { login } = useContext(authContext);

    let loginSchema = yup.object({
        email: yup.string().default('demo-user@gmail.com').required(),
        password: yup.string().default('Demo$Password!').required()
    })

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Card>
                <CardHeader title="Demo Plants" titleTypographyProps={{ variant: "h4" }} />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} lg>
                            <Formik
                                validationSchema={loginSchema}
                                initialValues={loginSchema.getDefault()}
                                onSubmit={(values, action) => {
                                    let res = login(values.email, values.password);

                                    action.setSubmitting(false);

                                    if (res === true)
                                        navigate('/');
                                }}
                            >
                                <Form>
                                    <LoginForm />
                                </Form>
                            </Formik>
                        </Grid>
                        <Grid item>
                            <img src="/images/jungle-plants.jpg" alt="cover" width={300} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container >
    )
}

export default Login;