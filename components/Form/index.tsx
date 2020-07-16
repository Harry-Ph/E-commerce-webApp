import {Box, Card, CardContent, FormGroup, TextField, Typography, MenuItem, Button} from '@material-ui/core'
import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {object, string} from 'yup'
import useStyles from "./style";

const initialValues = {
    username: '',
    email: '',
    password: '',
    role: 'user',
    status: 'Deactivate',
}

const FormData = () => {
    const classes = useStyles()
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">New Account</Typography>
                <Formik
                    validationSchema={
                        object({
                            username: string().required().min(2).max(10),
                            email: string().required().email(),
                            password: string().required().min(2).max(10)
                        })
                    }
                    initialValues={initialValues}
                    onSubmit={() => {}}>
                    {({isSubmitting}) => (
                        <Form>
                            <Box className={classes.margin}>
                                <FormGroup>
                                    <Field name="username" as={TextField} label="Username"/>
                                    <ErrorMessage name="username" />
                                </FormGroup>
                            </Box>
                            <Box>
                                <FormGroup>
                                    <Field name="email" as={TextField} label="Email"/>
                                    <ErrorMessage name="email" />
                                </FormGroup>
                            </Box>
                            <Box className={classes.margin}>
                                <Field name="password" as={TextField} type={'password'} label="Password" />
                                <ErrorMessage name="password" />
                            </Box>
                            <Box className={classes.margin}>
                                <FormGroup>
                                    <Field name="role" as={TextField} select label="Role">
                                        <MenuItem value="user">User</MenuItem>
                                        <MenuItem value="admin">Admin</MenuItem>
                                    </Field>
                                </FormGroup>
                            </Box>
                            <Box className={classes.margin}>
                                <FormGroup>
                                    <Field name="status" as={TextField} select label="Status">
                                        <MenuItem value="Activate">Activate</MenuItem>
                                        <MenuItem value="Deactivate">Deactivate</MenuItem>
                                    </Field>
                                </FormGroup>
                            </Box>
                            <Button className={classes.btnSubmit} type="submit" disabled={isSubmitting}>Submit</Button>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
    );
}

export default FormData