import React, {useState} from 'react'
import useStyles from './style'
import { PaginationRenderItemParams } from '@material-ui/lab';
import { Card, CardMedia, CardContent, Typography, CardActionArea, CardActions, Button } from '@material-ui/core'
import {GetStaticPaths, GetStaticProps} from "next";
import Loading from "../../components/Loading";
import {gql, NetworkStatus} from "@apollo/client";
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
import Modal from "../../components/Modal";


;
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
  numberPages: number,
  networkStatus: any
}

export default function Products({ products, numberPages, networkStatus}: IProducts) {
  const classes = useStyles();

  console.log('networkStatus component ...', networkStatus)
  const router = useRouter();
  if( router.isFallback || !products) {
    return <Loading/>
  }

  // const { loading, error, data, refetch, networkStatus } = useQuery(
  //   GET_DOG_PHOTO,
  //   {
  //     variables: { breed },
  //     notifyOnNetworkStatusChange: true,
  //   },
  // );

  // if(networkStatus === NetworkStatus.refetch) {
  //   return <Loading/>
  // }

  //modal function
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);



  const handleOpen = (e: any) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose =  (e: any) => {
    e.preventDefault();
    setOpen(false);
  };

  const handleOpenOrCloseEdit = (e: any) => {
    e.preventDefault();
    setOpenEdit(!openEdit);
  };

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
              <>
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
                    <CardActions className={classes.item__buttons}>
                      <Box component="div">
                        <Button size="small" color="primary"  className={classes.button__addToCart}>
                          Add To Cart
                        </Button>
                        <Button size="small" color="primary" onClick={handleOpenOrCloseEdit}>
                          Edit
                        </Button>
                      </Box>
                      <Button size="small" color="primary" onClick={handleOpen}>
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Link>
                {open? (<Modal
                        handleClose={handleClose}
                        handleOpen={handleOpen}
                        open={open}
                        isEdit={false}
                    />)
                    :null
                }
                {openEdit? (<Modal
                        handleClose={handleOpenOrCloseEdit}
                        handleOpen={handleOpenOrCloseEdit}
                        open={openEdit}
                        isEdit={true}
                    />)
                    :null
                }
              </>

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

  const {  loading, error, data, networkStatus } = await client.query({
    query: ALL_PRODUCTS,
    variables: {
      skip: '0',
      take: take
    },
  })

  console.log('networkStatus statis func ...', networkStatus)
  const products = Object.keys(data).map((k) => data[k])[0]

  return {
    props: {
      products,
      numberPages,
      networkStatus
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