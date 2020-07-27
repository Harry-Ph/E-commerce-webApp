import React from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core"
import useStyles from '../style'
import { gql } from '@apollo/client'
import {GetStaticPaths, GetStaticProps} from "next";
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
    product: Product
}

export default function ProductDetails ({product}: IProduct) {
    if( !product) {
        return <Loading/>
    }

    const classes = useStyles()
    return (
    <Card className={classes.root}>
        <CardMedia
            className={classes.img}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRROrogs_AtLLQ3iO8Ji3UsVNGhqgGKCqOt7Q&usqp=CAU"
            title="Live from space album cover"
        />
        <div className={classes.details}>
            <CardContent>
                <Typography component="h1" variant="h3">
                    {product?.product[0]!.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Price
                </Typography>
                <Typography variant="h5" color="textSecondary">
                    isAvailable
                </Typography>
                <Typography variant="subtitle2">
                    desc
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Add to cart
                </Button>
            </CardActions>
        </div>
    </Card>
    );
}

export const getStaticProps:GetStaticProps = async (ctx) => {
    console.log('ctx?.params?.id', ctx?.params?.id )
    const {data } = await client.query({
        query: DETAIL_PRODUCT,
        variables: {queryStr: ctx?.params?.id}
    })
    console.log('data-->', data)

    return {
        props: {
            product: data!
        },
    }
}

export const getStaticPaths:GetStaticPaths<{id:string}> = async () => {
    const take = '2';
    const {  data } = await client.query({
        query: ALL_PRODUCTS,
        variables: {
            skip: "0",
            take: take
        }
    })

    let arr = Object.keys(data).map((k) => data[k])[0]

    const paths = arr.slice(0, +take).map((p)=> {
        return {params: {id: p.id}}
    })
    console.log('arr...-=', paths)
    return {
        fallback: true,
        paths
    }
}
