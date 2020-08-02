import React from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Typography, Box, CardActionArea, Grid, TextField, MenuItem} from "@material-ui/core"
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import useStyles from './style'
import { gql } from '@apollo/client'
import {GetServerSideProps } from "next";
import client from "../../apollo";
import Loading from "../../../components/Loading";
import {Product} from "../../../interfaces";


const DETAIL_PRODUCT = gql`
    query product($queryStr: String!) {
        product(queryStr: $queryStr) {
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

export interface IProduct {
    loading: boolean,
    product: {
        product: Product[]
    }
}

const sizes = [
    {
        value: "37",
        label: 'EU 37'
    },
    {
        value: "38",
        label: 'EU 38'
    },
    {
        value: "39",
        label: 'EU 39'
    },
    {
        value: "40",
        label: 'EU 40'
    },
    {
        value: "41",
        label: 'EU 41'
    },
    {
        value: "42",
        label: 'EU 42'
    },
    {
        value: "43",
        label: 'EU 43'
    }
]

export default function ProductDetails ({loading, product}: IProduct) {
    if(loading) {
        return <Loading/>
    }

    const classes = useStyles();

    const [size, setSize] = React.useState("37");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSize(event.target.value);
    };
    return (
        <Box component="div">
            <Grid container spacing={3} className={classes.root} >
                <Grid item xs={12} sm={8} md={5}>
                    <Card className={classes.grid__img}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.item__img}
                                component="img"
                                image="https://cdn.bike24.net/i/mb/d8/fa/b2/277893-00-d-557791.jpg"
                                title="Live from space album cover"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={5}>
                    <Box component="div">
                        <CardContent>
                            <Typography component="h1" variant="h3">
                                {product?.product[0].name}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                €60.0
                            </Typography>
                            <Typography variant="h5" color="textSecondary">
                                isAvailable
                            </Typography>

                            <Typography variant="body2" component={"p"} className={classes.content__description}>
                                Maximum impact cushioning. The brutal, repetitive,
                                downward force of sport can wreak havoc on the body and on performance.
                                Max Air cushioning is specifically engineered to handle these impacts and provide protection.
                                Max Air is big air designed to take a pounding.
                            </Typography>
                           <TextField
                               select
                               value={size}
                               onChange={handleChange}
                               helperText="Please select your size"
                               variant="outlined"
                           >
                               {sizes.map((option) => (
                                   <MenuItem key={option.value} value={option.value}>
                                       {option.label}
                                   </MenuItem>
                               ))}

                           </TextField>
                            <Typography variant="h4" className={classes.content__subheading}>
                                Other Styles
                            </Typography>
                            <Card>
                                    <Grid container spacing={3}  >
                                        <Grid item xs={8} sm={4} md={3}>
                                            <CardActionArea>
                                            <CardMedia
                                                className={classes.item__img}
                                                component="img"
                                                // image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5zl5UnBo5nybZFMM8nmCO64hsYCoSIumUxQ&usqp=CAU"
                                                image={"https://media.finishline.com/i/finishline/921826_101_P1?$Main_gray$&bg=rgb(237,237,237)"}
                                                title="Live from space album cover"
                                            />
                                            </CardActionArea>
                                        </Grid>
                                        <Grid item xs={8} sm={4} md={3}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.item__img}
                                                    component="img"
                                                    // image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5zl5UnBo5nybZFMM8nmCO64hsYCoSIumUxQ&usqp=CAU"
                                                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGt9ihrNJA8G1q1dI_eRuo6E57GnCQlEz7Cw&usqp=CAU"}
                                                    title="Live from space album cover"
                                                />
                                            </CardActionArea>
                                        </Grid>
                                        <Grid item xs={8} sm={4} md={3}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.item__img}
                                                    component="img"
                                                    // image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5zl5UnBo5nybZFMM8nmCO64hsYCoSIumUxQ&usqp=CAU"
                                                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS00zLocLqLnS7BOqsfe8oBLOyJ25HcAN00lQ&usqp=CAU"}
                                                    title="Live from space album cover"
                                                />
                                            </CardActionArea>
                                        </Grid>
                                        <Grid item xs={8} sm={4} md={3}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.item__img}
                                                    component="img"
                                                    // image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5zl5UnBo5nybZFMM8nmCO64hsYCoSIumUxQ&usqp=CAU"
                                                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQopab8qDoJdYe7hOZWYLlN2yoxvfiz_8RP2g&usqp=CAU"}
                                                    title="Live from space album cover"
                                                />
                                            </CardActionArea>
                                        </Grid>
                                    </Grid>
                            </Card>
                        </CardContent>
                        <CardActions className={classes.buttons}>
                            <Button size="small" color="primary" fullWidth={true}>
                                Add to cart
                            </Button>
                            <Button variant="outlined" fullWidth={true} endIcon={<FavoriteBorderOutlinedIcon />}>
                                Favourite
                            </Button>

                        </CardActions>
                    </Box>
                </Grid>
            </Grid>
        </Box>


    );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
        const {data, loading} = await client.query({
            query: DETAIL_PRODUCT,
            variables: {queryStr: ctx?.params?.id}
        })
        console.log('aaaa----->', data)
        return {
            props: {
                product: data!,
                loading: loading

            },
        }
    }



