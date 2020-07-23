import React from "react";
import { withUrqlClient, NextUrqlAppContext } from "next-urql";
import NextApp, { AppProps } from "next/app";
import fetch from "isomorphic-unfetch";
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import {Router} from 'next/dist/client/router'
import Head from 'next/head';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import {ApolloProvider} from "@apollo/client";
import client from "./apollo";
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import {useStylesApp} from './style'

// the URL to /api/graphql
export const GRAPHQL_ENDPOINT = `http://localhost:3000/api/graphql`;

Router.events.on('routeChangeStart', ()=> {
    Nprogress.start()
})

Router.events.on('routeChangeComplete', ()=> {
    Nprogress.done();
})

Router.events.on('routeChangeError', ()=> {
    Nprogress.done();
})

const App = ({ Component, pageProps }: AppProps) => {
    const classes = useStylesApp()
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return  <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NavBar/>
          <div className={classes.contentApp}>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </div>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
};

App.getInitialProps = async (ctx: NextUrqlAppContext) => {
  const appProps = await NextApp.getInitialProps(ctx);
  return { ...appProps };
};

export default withUrqlClient((_ssrExchange, _ctx) => ({
  url: GRAPHQL_ENDPOINT,
  fetch,
}))(
  // @ts-ignore
  App
);
