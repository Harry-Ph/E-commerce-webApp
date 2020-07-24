import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Ppl } from '../../interfaces'
import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'
import gql from 'graphql-tag'
import client from '../apollo'
import Table from '../../components/Table';

type Props = {
  users: Ppl[]
}

export const AllUsersQuery = gql`
  query AllUsers {
    allUsers {
      id
      username
      email
      password
      role
      status
    }
  }
`;

const WithStaticProps = ({ users }: Props) => {
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <Table items={users} />
    <p>
      <Link href="/api/books">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
  );
  }

export const getStaticProps: GetStaticProps = async () => {

  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  // const items: Ppl[] = sampleUserData; 
  const { data } = await client.query({
            query: AllUsersQuery
        })
  return { props: { users : data?.allUsers } }
}

export default WithStaticProps
