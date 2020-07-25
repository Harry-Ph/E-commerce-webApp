import React from 'react'
import useStyles from './style'
import { PaginationRenderItemParams } from '@material-ui/lab';
import { Card, CardMedia, CardContent, Typography, CardActionArea, CardActions, Button } from '@material-ui/core'
import {GetStaticPaths, GetStaticProps} from "next";
import Loading from "../../components/Loading";
import {gql} from "@apollo/client";
import client from "../apollo";
import {Product} from "../../interfaces";
import Link from "next/link";
import {useRouter} from "next/router";
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { ParsedUrlQuery } from 'querystring';
import { PrismaClient } from "@prisma/client"
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
const prisma2 = new PrismaClient()

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
  numberPages: number
}

export default function Products({ products, numberPages }: IProducts) {
  const classes = useStyles();

  const router = useRouter();
  if( router.isFallback || !products) {
    return <Loading/>
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.content__tittle}>
        <div>POPULAR PRODUCTS</div>
      </div>
      <Box className={classes.content__pagination}>
        {
          (numberPages > 0 || !router.isFallback) ? (<Pagination
              page={parseInt(router.query.page as string || '1')}
              count={numberPages}
              defaultPage={1}
              renderItem={(item) => (
                <PaginationItem
                  component={MaterialUiLink}
                  query={router.query}
                  item={item}
                  {...item}
                />
              )}
            />) :
            <Skeleton variant="rect" width={'30vw'} height={'28px'} />
        }
      </Box>
      <div className={classes.content__items}>
        {
          ((products && products.length > 0) || !router.isFallback) ?
            (products?.map(p=> (
              <Link href="/products/details/[id]" as={`/products/details/${p.id}`}>
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

            ))) :
            <Box className={classes.content__skeleton}>
              <Skeleton variant="rect" width={'28vw'} height={'600px'} />
              <div className={classes.wrapper__loading}>
                <Loading />
              </div>
            </Box>
        }
      </div>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async (ctx) => {
  const take = '3';
  const totalProducts = await prisma2.product.findMany();
  const productsArray = Object.keys(totalProducts).map((k) => totalProducts[k])
  const numberPages = Math.ceil((productsArray?.length || 0) as number / +take) as number;

  const {  data } = await client.query({
    query: ALL_PRODUCTS,
    variables: {
      skip: '0',
      take: take
    }
  })

  const products = Object.keys(data).map((k) => data[k])[0]

  return {
    props: {
      products,
      numberPages
    },
  }
}

export interface MaterialUiLinkProps {
  item: PaginationRenderItemParams;
  query: ParsedUrlQuery;
}

export function MaterialUiLink({ item, query, ...props }: MaterialUiLinkProps) {
  return (
    <Link
      href="/products/[page]"
      as={`/products/${item.page}`}
    >
      <a {...props}></a>
    </Link>
  );
}