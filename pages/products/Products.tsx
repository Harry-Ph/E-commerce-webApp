import React from 'react'
import useStyles from './style'
import { Card, CardMedia, CardContent, Typography, CardActionArea, CardActions, Button } from '@material-ui/core'
import {GetStaticProps, InferGetStaticPropsType} from "next";
import Loading from "../../components/Loading";
import {gql} from "@apollo/client";
import client from "../apollo";
import {Product} from "../../interfaces";
import Link from "next/link";


const ALL_PRODUCTS = gql`
    query allProducts($skip: String!, $take: String!) {
        allProducts(skip: $skip, take: $take) {
            id
            name
        }
    }
`

export interface IProducts {
    products: Product[]
}

export default function Products({products}: IProducts) {
    // console.log('data-->....->', products)
    // if (!products || products.length === 0) return <Loading/>
    //
    const classes = useStyles()
    console.log('res?.data', products)
    return (
        <div className={classes.wrapper}>
            <div className={classes.content__tittle}>
                <div>POPULAR PRODUCTS</div>
            </div>
            <div className={classes.content__items}>
                {
                    products?.map(p=> (
                        <Link href="/products/details/[id" as={`/products/details/${p.id}`}>
                            <Card className={classes.content__item}>
                                <CardActionArea>
                                    <CardMedia className={classes.item__media}
                                               image="https://cdn.bike24.net/i/mb/d8/fa/b2/277893-00-d-557791.jpg"
                                               title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {p?.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Maximum impact cushioning. The brutal, repetitive,
                                            downward force of sport can wreak havoc on the body and on performance.
                                            Max Air cushioning is specifically engineered to handle these impacts and provide protection.
                                            Max Air is big air designed to take a pounding.
                                        </Typography>
                                        <Typography className={classes.item__price} >PRICE: 60.0 Euro</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Add To Cart
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Link>

                    ))
                }
            </div>
        </div>
        )
}

export const getStaticProps:GetStaticProps = async () => {
    const {  data } = await client.query({
        query: ALL_PRODUCTS,
        variables: {
            skip: "0",
            take: "2"
        }
    })
    console.log('data-->', data)

    return {
        props: {
            products: data!.allProducts
        },
    }
}