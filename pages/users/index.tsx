import {  GetServerSideProps } from 'next'
import Link from 'next/link'

import { Ppl } from '../../interfaces'
import Layout from '../../components/Layout'
import gql from 'graphql-tag'
import client from '../../src/apollo'
import Table from '../../components/Table';
import { Box } from '@material-ui/core'
import Loading from '../../components/Loading'
import { useRouter } from 'next/router'
import { Pagination, PaginationItem, Skeleton, PaginationRenderItemParams } from '@material-ui/lab'
import { ParsedUrlQuery } from 'querystring'
import { PrismaClient } from '@prisma/client'
const prisma2 = new PrismaClient()

type Props = {
  users: Ppl[]
  numberPages: number
  loading: boolean
}

export const AllUsersQuery = gql`
  query AllUsers($skip: String!, $take: String!) {
    allUsers(skip: $skip, take: $take) {
      id
      username
      email
      password
      role
      status
    }
  }
`;



const WithStaticProps = ({ loading, users, numberPages }: Props) => {
  const router = useRouter();
  if( loading || !users) {
    return <Loading/>
  }
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    
    <Box>
        {
          (numberPages > 0 || !loading) ? (<Pagination
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

    <Table items={users} />
    <p>
      <Link href="/api/books">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
  );
  }



export default WithStaticProps

export interface MaterialUiLinkProps {
  item: PaginationRenderItemParams;
  query: ParsedUrlQuery;
}

export function MaterialUiLink({ item, query, ...props }: MaterialUiLinkProps) {
  return (
    <Link
      href={
        { // users?page=1
          pathname: '/users',
          query: {...query, page: item.page}
        }
      }
    >
      <a {...props}></a>
    </Link>
  );
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const pageQuery = (ctx.query?.page || 1) as string;
ctx.req
  const take = '3';
  const totalUsers = await prisma2.ppl.findMany();
  const usersArray = Object.keys(totalUsers).map((k) => totalUsers[parseInt(k)])
  const numberPages = Math.ceil((usersArray?.length || 0) as number / +take) as number;
 

  const first = String((parseInt(pageQuery) -1) * (+take))
  const { loading, data } = await client.query({
            query: AllUsersQuery,
            variables: {
              skip: first,
              take: take
            }
        })

  return {
    props: {
      loading,
      users: data?.allUsers,
      numberPages
    }
  }
}