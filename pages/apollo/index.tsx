import { ApolloClient, InMemoryCache } from '@apollo/client';
// import {GRAPHQL_ENDPOINT} from '../_app'

const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache()
});

export default client