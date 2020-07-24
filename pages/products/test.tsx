import React from 'react'
import useStyles from './details/style'
import { PaginationRenderItemParams } from '@material-ui/lab';
import { Card, CardMedia, CardContent, Typography, CardActionArea, CardActions, Button } from '@material-ui/core'
import {GetStaticPaths, GetStaticProps} from "next";
import Loading from "../../components/Loading";
import {gql} from "@apollo/client";
import client from "../apollo";
import {Product, Ppl} from "../../interfaces";
import Link from "next/link";
import {useRouter} from "next/router";
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { ParsedUrlQuery } from 'querystring';
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";


export const AllUsersQuery = gql`
  query AllUsers {
    allUsers {
      id
      username
      email
      passwordy
      role
      status
    }
  }
`

export interface IUsers {
  Users: Ppl[]
}

export default function Users({ Users}: IUsers) {
  const classes = useStyles();

  const router = useRouter();
  if( router.isFallback || !Users) {
    return <Loading/>
  }
  console.log('Users',Users)
  return (
    <h1>Hello word</h1>
  )
}

export const getStaticProps:GetStaticProps = async (ctx) => {

  const {  data } = await client.query({
    query: AllUsersQuery,
  })
console.log('data',data)
  return {
    props: {
      Users: data?.allUsers
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

