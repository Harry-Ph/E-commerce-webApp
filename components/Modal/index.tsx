import React, {useState} from 'react';
import {Modal, Backdrop, Fade, Button, CircularProgress} from '@material-ui/core';

import {request} from "graphql-request";
import useSWR, {mutate, trigger} from 'swr'
import useStyles from './style';
import Router, {useRouter} from "next/router";
import {Product} from "../../interfaces";
import {FormikConfig, FormikValues} from "formik";

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

/* GraphQL */
const REMOVE_PRODUCT = /* GraphQL */`
    mutation removeProductById($id: String!) {
        removeProductById(id: $id) {
            id
            name
        }
    }
`

/* GraphQL */
const CREATE_PRODUCT2 = /* GraphQL */ `
  mutation createNewOneProduct($name: String!) {
    createNewOneProduct(name: $name) {
      id
      name
    }
  }
`;

const API = 'http://localhost:3000/api/graphql'

export interface IModel {
  currentPage: any
  handleOpen: ()=> void
  product: Product
  handleClose: ()=> void
  open: boolean
}
// @ts-ignore
export default function TransitionsModal({currentPage, handleOpen, product, handleClose, open}: IModel) {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);
    const handleRemoveInModal = async (e) => {

      e.preventDefault();
      e.stopPropagation();

      await setIsLoading(true)
      await sleep(2000);

      await mutate(API);
      const {id} = product;
      await request(API, REMOVE_PRODUCT, {id})
      await trigger(API);
      await Router.push(`/products/${currentPage}`)
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
                        <h2 id="transition-modal-title">DELETE THIS PRODUCT</h2>
                        <p id="transition-modal-description">Do you want to delete this item?.</p>
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

                        >CANCEL</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
