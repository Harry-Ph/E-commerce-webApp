import {GetStaticProps, GetStaticPaths, GetServerSideProps} from 'next'

import { Ppl } from '../../../interfaces'
import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../../components/Layout'
import ListDetail from '../../../components/ListDetail'
import client from "../../apollo";
import {AllUsersQuery} from "../index";
import {gql} from "@apollo/client";
import {useRouter} from "next/router";

const DETAIL_USER = gql`
    query ppl($queryStr: String!) {
        ppl(queryStr: $queryStr) {
            id
            username
        }
    }
`

type Props = {
  item?: Ppl
  errors?: string
}



const StaticPropsDetail = ({ item, errors }: Props) => {
  console.log('112asdasd',item?.username)
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      {item?.username}
    </Layout>
  )
}

export default StaticPropsDetail

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  console.log(11111111, ctx.query?.id)
  const { loading, data } = await client.query({
    query: DETAIL_USER,
    variables: {
      queryStr: ctx.query?.id
    }
  })

  console.log(3333333333333333, data.ppl[0])

  return {
    props: {
      loading,
      item: data.ppl[0]
    }
  }
}
