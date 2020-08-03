import React from 'react';
import {
    Modal,
    Backdrop,
    Fade,
    Button,
    CardContent,
    Typography,
    Box,
    FormGroup,
    TextField,
    MenuItem, Card
} from '@material-ui/core';


import useStyles from './style';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {object, string} from "yup";
const initialValues = {
    name: '',
}
export default function TransitionsModal({handleOpen, handleClose, open, isEdit}) {
    const classes = useStyles();

    return (
        <div>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">{!isEdit ? 'DELETE' : 'EDIT'} THIS ITEM</h2>
                        <p id="transition-modal-description">Do you want to {!isEdit ? 'delete' : 'edit'} this item?.</p>
                        {isEdit ?
                            (<Card>
                                <CardContent>
                                    <Formik
                                        validationSchema={
                                            object({
                                                name: string().required().min(2).max(50),
                                            })
                                        }
                                        initialValues={initialValues}
                                        onSubmit={() => {}}>
                                        {({isSubmitting}) => (
                                            <Form>
                                                <Box className={classes.margin}>
                                                    <FormGroup>
                                                        <Field name="name" as={TextField} label="Name"/>
                                                        <ErrorMessage name="name" />
                                                    </FormGroup>
                                                </Box>
                                                <Button type="submit" disabled={isSubmitting} size="small" variant="contained" color="primary" onClick={handleClose}>SUBMIT</Button>
                                                <Button size="small" variant="outlined" color="default" onClick={handleClose}>CANCEL</Button>
                                            </Form>
                                        )}
                                    </Formik>
                                </CardContent>
                            </Card>)
                            :
                            <>
                                <Button size="small" variant="contained" color="primary" onClick={handleClose}>{!isEdit ? 'DELETE' : 'EDIT'}</Button>
                                <Button size="small" variant="outlined" color="default" onClick={handleClose}>CANCEL</Button>
                            </>}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
