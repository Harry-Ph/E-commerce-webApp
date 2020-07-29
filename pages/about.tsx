import Link from 'next/link'
import Layout from '../components/Layout'
import {gql, NetworkStatus, useQuery} from '@apollo/client'
import useStyles from './products/style'
import {Product} from "../interfaces";
import {initializeApollo} from "./apollo";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import React from "react";
import Box from "@material-ui/core/Box";

const ALL_PRODUCTS = gql`
    query allProducts($skip: String!, $take: String!) {
        allProducts(skip: $skip, take: $take) {
            id
            name
        }
    }
`

export interface  IProducts {
    products: Product[]
}
// @ts-ignore
export default function AboutPage({initialApolloState}) {
    const classes = useStyles();
    const devs = [
        {
            name: 'Phan Hong Duc',
            Career: 'Full stack developer in JS/TS and Java',
            'Tech-skills': 'TS, ReactJS, NextJS, NodeJS, Express, GraphQL, MongoDB, Postgres, MySQL, Java, Vaadin, Git',
            Address: 'Helsinki, Finland',
            img: '/img/Duc-Phan.jpg',
            github: 'https://github.com/hongduc-phan'
        },
        {
            name: 'Phan Hong Phat',
            Career: 'Full stack developer in JS/TS',
            'Tech-skills': 'TS, ReactJS, NextJS, NodeJS, Express, GraphQL, MongoDB, Postgres, MySQL, Git',
            Address: 'Helsinki, Finland',
            img: '/img/Phat-Phan.jpg',
            github: 'https://github.com/phanhongphat'
        },
        {
            name: 'Phan Thanh Dat',
            Career: 'Full stack developer in JS/TS and Java',
            'Tech-skills': 'TS, ReactJS, NextJS, NodeJS, Express, GraphQL, MongoDB, Postgres, MySQL, Java, Vaadin, Git',
            Address: 'Helsinki, Finland',
            img: '/img/Dat-Phan.jpg',
            github: 'https://github.com/ptdatkhtn'
        }
    ]
    const result = useQuery(
      ALL_PRODUCTS,
      {
          variables: {
              skip: '0',
              take: '3'
          },
          notifyOnNetworkStatusChange: true,
      }
    )
    // const loadingMorePosts = networkStatus === NetworkStatus.fetchMore
    // console.log(loadingMorePosts)
    console.log('result', result)
    console.log('initialApolloState', initialApolloState)
    return <Box className={classes.content__items}>
        {
            devs?.map((dev)=> (<Card className={classes.content__item}>
                <CardActionArea>
                    <CardMedia className={classes.item__media}
                               image={dev.img}
                               title={dev.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {dev.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {dev['Tech-skills']}
                        </Typography>
                        <Typography className={classes.item__price} >{dev.Career}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href={dev.github}>
                        Github
                    </a>

                </CardActions>
            </Card>))
        }
    </Box>
}

export async function getStaticProps() {
    const apolloClient = initializeApollo()
    console.log(111111111111111111)

    await apolloClient.query({
        query: ALL_PRODUCTS,
        variables: {
            skip: '0',
            take: '3'
        },
    })

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
        // revalidate: 1,
    }
}