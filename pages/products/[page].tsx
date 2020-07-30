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
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import { ParsedUrlQuery } from 'querystring';
import { PrismaClient } from "@prisma/client"
import {request} from "graphql-request";
import useSWR from 'swr'
const prisma2 = new PrismaClient()

const take = '3';

const ALL_PRODUCTS = gql`
    query allProducts($skip: String!, $take: String!) {
        allProducts(skip: $skip, take: $take) {
            id
            name
        }
    }
`

const ALL_PRODUCTS2 = /* GraphQL */`
    query allProducts($skip: String!, $take: String!) {
        allProducts(skip: $skip, take: $take) {
            id
            name
        }
    }
`;

const API = 'http://localhost:3000/api/graphql'
const fetcher = (query: any, first: string, take: string) => request('http://localhost:3000/api/graphql', query, {first, take});

export interface IProducts {
  products: Product[]
  numberPages: number,
  first: string
}

export default function Products() {
  const classes = useStyles();
  const {data} = useSWR([ALL_PRODUCTS2, '0', '3'], fetcher)
  const loading: boolean = !data;
  // console.log('products1', products)
  const numberPages = 10;
  console.log('data', data)
  const router = useRouter();
  const products = data;
  if( router.isFallback || loading) {
    return <Loading/>
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.content__tittle}>
        <div>POPULAR PRODUCTS</div>
      </div>
      <Box className={classes.content__pagination}>
        {
          (numberPages > 0 || !router.isFallback)? (<Pagination
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
              <Skeleton variant="rect" width={'28vw'} height={'720px'} />
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
  const totalProducts = await prisma2.product.findMany();
  const productsArray = Object.keys(totalProducts).map((k) => totalProducts[parseInt(k)])
  const numberPages = Math.ceil((productsArray?.length || 0) as number / +take) as number;
  const pageQuery = (ctx?.params?.page || 1) as string;

  const first = String((parseInt(pageQuery) -1) * (+take))

  const {  data } = await client.query({
    query: ALL_PRODUCTS,
    variables: {
      skip: first,
      take: take
    }
  })

  const products2 = await fetcher(API, first, take);
console.log(products)
  const products = Object.keys(data).map((k) => data[k])[0]
console.log(' server build...', data)
  return {
    props: {
      products,
      numberPages,
      first
    },
  }
}

export const getStaticPaths:GetStaticPaths<{page:string}> = async () => {
  return {
    paths: [
      { params: { page: '1' } },
      { params: { page: '2' } },
      { params: { page: '3' } }
    ],
    fallback: true
  };
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
