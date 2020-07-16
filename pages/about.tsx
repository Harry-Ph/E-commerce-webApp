import Link from 'next/link'
import Layout from '../components/Layout'
import { useQuery, gql } from '@apollo/client'

const ALL_PRODUCTS = gql`
    query allProducts {
      allProducts {
        id
        name
      }
    }
`

const AboutPage = () => {
    const { loading, error, data } = useQuery(ALL_PRODUCTS);
    if (loading) return 'Loading...';
    if (error) console.log(error.message);
    console.log(data)
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

export default AboutPage
