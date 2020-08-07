import React, {useState} from 'react';
import {Modal, Backdrop, Fade, Button, CircularProgress, Box, FormGroup, TextField} from '@material-ui/core';

import {request} from "graphql-request";
import  {mutate, trigger} from 'swr'
import useStyles from './style';
import {Product} from "../../interfaces";
import {ErrorMessage, Field, Form, Formik} from "formik";

import {object, string} from "yup";

const sleep = (time: any) => new Promise((acc: any) => setTimeout(acc, time));

/* GraphQL */
const REMOVE_PRODUCT = /* GraphQL */`
    mutation removeProductById($id: String!) {
        removeProductById(id: $id) {
            id
            name
        }
    }
`

const API = 'http://localhost:3000/api/graphql'

export interface IModel {
  currentPage: any
  handleOpen: (e: any)=> void
  product: Product
  handleClose: (e: any)=> void
  redirectRouting:  (currentPage: string)=> void
  open: boolean
  isEdit: boolean
  products: {
    allProducts: Product[]
  }
}

const initialValues = {
    name: '',
}

// @ts-ignore
export default function TransitionsModal({products , redirectRouting, currentPage, handleOpen, product, handleClose, open, isEdit}: IModel) {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);

    const handleRemoveInModal = async (e: any) => {

      e.preventDefault();
      e.stopPropagation();

      await setIsLoading(true)

      await sleep(2000);
      const {id} = product;
      console.log('products', products)

      await mutate(API, products?.allProducts.filter(p => p?.id != id), false);

      await request(API, REMOVE_PRODUCT, {id})

      // await  mutate(API, async () => {
      //   const {allProducts} = await fetcher(ALL_PRODUCTS2, skip as string, take as string);
      //   return [...allProducts?.filter(p => p?.id != id)];
      // })

      await trigger(API);



      await handleClose(e);

      // await redirectRouting(String(currentPage))
      // await Router.replace(`/products/${currentPage}`,  `/products/${currentPage}`, {shallow: true})
    }

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
                        <h2 id="transition-modal-title">{isEdit ? 'EDIT' : 'DELETE'} THIS PRODUCT</h2>
                        <p id="transition-modal-description">Do you want to {isEdit ? 'edit' : 'delete'} this item?.</p>
                        {isEdit ?
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
                                        <Box>
                                            <FormGroup>
                                                <Field name="name" as={TextField} label="Name"/>
                                                <ErrorMessage name="name" />
                                            </FormGroup>
                                        </Box>
                                        <Button size="small"
                                                variant="contained"
                                                color="primary"
                                                type="submit" disabled={isSubmitting}>SUBMIT</Button>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="default"
                                            type="submit"
                                            onClick={handleClose}
                                            disabled={isLoading}
                                        >CANCEL</Button>
                                    </Form>
                                )}
                            </Formik>
                            :
                            <>
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    onClick={handleRemoveInModal}
                                    startIcon={isLoading ? <CircularProgress size="1rem" /> : null}
                                    disabled={isLoading}
                                >REMOVE</Button>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    color="default"
                                    type="submit"
                                    onClick={handleClose}
                                    disabled={isLoading}
                                >CANCEL</Button>
                            </>
                        }
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
