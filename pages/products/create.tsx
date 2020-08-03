import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  MenuItem,
  Step,
  StepLabel,
  Stepper
} from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { useState } from 'react';
import {mixed, number, object, string} from 'yup';
import FormGroup from "@material-ui/core/FormGroup";
import { Select } from 'formik-material-ui';
import {gql, useMutation} from "@apollo/client";
import {request} from "graphql-request";
import useSWR , {trigger, mutate }from 'swr'
import Router from "next/router";
const API = 'http://localhost:3000/api/graphql'

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

const DETAIL_PRODUCT = gql`
    query product($queryStr: String!) {
        product(queryStr: $queryStr) {
            id
            name
        }
    }
`

const CREATE_PRODUCT = gql`
    mutation createNewOneProduct($name: String!) {
        createNewOneProduct(name: $name) {
            id
            name
        }
    }
`

/* GraphQL */
const CREATE_PRODUCT2 = /* GraphQL */`
    mutation createNewOneProduct($name: String!) {
        createNewOneProduct(name: $name) {
            id
            name
        }
    }
`

const ALL_PRODUCTS = gql`
    query allProducts($skip: String!, $take: String!) {
        allProducts(skip: $skip, take: $take) {
            id
            name
        }
    }
`

export default function CreateProduct() {
  // const [addProduct] = useMutation(CREATE_PRODUCT);

  // the mutate function will do the refetching for us
  // const { mutate } = useSWR(CREATE_PRODUCT2);

  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={{
            name: '',
            brand: 'Other',
            isAvailable: false,
            money: 0,
            description: '',
          }}
          onSubmit={async (values) => {
            await sleep(2000);
            console.log('values', values);
            // try {
            //   const {data} = await client.query({
            //     query: CREATE_PRODUCT,
            //     variables: {
            //       name: 'test hang'
            //     }
            //   })
            //   // const {  data } = await client.query({
            //   //   query: ALL_PRODUCTS,
            //   //   variables: {
            //   //     skip: 0,
            //   //     take: 10
            //   //   }
            //   // })
            //   console.log('dataaaa ne-> ', data)
            // } catch (e) {
            //   throw new Error(e)
            //   console.log(e)
            // }


            // const {data} = await client.query({
            //   query: CREATE_PRODUCT,
            //   variables: {
            //     name: 'test hang'
            //   }
            // })

            // call mutate here to refetch the new product after clicking
            await mutate(API);
            const {createNewOneProduct} = await request(API, CREATE_PRODUCT2, {name: values!.name})
            console.log('data check', createNewOneProduct)
            await trigger(API);

            // const productData = await addProduct({  variables: {
            //     name: values!.name
            //   } });

            await Router.push(`/products/details/${createNewOneProduct!.id}`);
          }}
        >
          <FormikStep
            label="Data Info"
            validationSchema={
              object({
                name: string().required().min(3).max(100),
              })
            }
          >
            <Box paddingBottom={2}>
              <Field fullWidth name="name" component={TextField} label="Name" />
            </Box>
            <Box paddingBottom={2}>
              <FormGroup>
                <Field name="brand" component={Select} label="Brand">
                  <MenuItem value="Nike">Nike</MenuItem>
                  <MenuItem value="Adidas">Adidas</MenuItem>
                  <MenuItem value="Puma">Puma</MenuItem>
                  <MenuItem value="Gucci">Gucci</MenuItem>
                  <MenuItem value="Dior">Dior</MenuItem>
                  <MenuItem value="Nana">Nana</MenuItem>
                  <MenuItem defaultChecked={true} value="Other">Other</MenuItem>
                </Field>
              </FormGroup>
            </Box>
            <Box paddingBottom={2}>
              <Field
                name="isAvailable"
                type="checkbox"
                component={CheckboxWithLabel}
                Label={{ label: 'Is product still available?' }}
              />
            </Box>
          </FormikStep>
          <FormikStep
            label="Price"
            validationSchema={object({
              money: mixed().when('isAvailable', {
                is: true,
                then: number()
                  .required()
                  .min(
                    0,
                    'The min-price of product is 0 eur'
                  ),
                otherwise: number().required(),
              }),
            })}
          >
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="money"
                type="number"
                component={TextField}
                label="All the money I have"
              />
            </Box>
          </FormikStep>
          <FormikStep label="More Info">
            <Box paddingBottom={2}>
              <Field fullWidth name="description" component={TextField} label="Description" />
            </Box>
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}