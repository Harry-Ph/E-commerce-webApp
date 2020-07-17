import Link from 'next/link'
import Layout from '../components/Layout'
import {gql, useQuery} from '@apollo/client'

import {Product} from "../interfaces";
import client from "./apollo";

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
export default function AboutPage({loading, data}) {
    return <Layout title="About | Next.js + TypeScript Example">
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
}

// @ts-ignore
export async function getServerSideProps(context) {
    // console.log('context--->', context.req)
    const { loading, data } = await client.query({
        query: ALL_PRODUCTS,
        variables: {
            skip: "0",
            take: "2"
        }
    })
    console.log('aaaaaaa--->', data)
    return {props: { loading, data }}
}

