import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'

import { Ppl } from '../../interfaces'
import Layout from '../../components/Layout'
import gql from 'graphql-tag'
import client from '../apollo'
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



const WithStaticProps = ({ users, numberPages }: Props) => {
  const router = useRouter();
  if( router.isFallback || !users) {
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

    <Table items={users} />
    <p>
      <Link href="/api/books">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
  );
  }

  //users/1
export const getStaticProps: GetStaticProps = async (ctx) => {
  const take = '4'
//   const totalUsers = await prisma2.ppl.findMany();
//   const usersArray = Object.keys(totalUsers).map((k) => totalUsers[k])
//   const numberPages = Math.ceil((usersArray?.length || 0) as number / +take) as number;
  const totalUsers = await prisma2.ppl.findMany();
  const usersArray = Object.keys(totalUsers).map((k) => totalUsers[parseInt(k)])
  const numberPages = Math.ceil((usersArray?.length || 0) as number / +take) as number;
  const pageQuery = (ctx?.params?.page || 1) as string;

  const first = String((parseInt(pageQuery) -1) * (+take))
  const { data } = await client.query({
            query: AllUsersQuery,
            variables: {
              skip: first,
              take: take
            }
        })
  return { props: {
     users : data?.allUsers,
     numberPages
    } }
}

export default WithStaticProps

export interface MaterialUiLinkProps {
  item: PaginationRenderItemParams;
  query: ParsedUrlQuery;
}

export function MaterialUiLink({ item, query, ...props }: MaterialUiLinkProps) {
  return (
    <Link
      href="/users/[page]"
      as={`/users/${item.page}`}
    >
      <a {...props}></a>
    </Link>
  );
}
export const getStaticPaths:GetStaticPaths<{page:string}> = async () => {
  // users/1
  return {
    paths: [
      { params: { page: '1' } },
      // { params: { page: '2' } },
      // { params: { page: '3' } },
    ],

    fallback: true
  };
}