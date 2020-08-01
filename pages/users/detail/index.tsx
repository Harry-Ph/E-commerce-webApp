import {GetStaticProps, GetStaticPaths, GetServerSideProps} from 'next'

import { Ppl } from '../../../interfaces'
import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../../components/Layout'
import ListDetail from '../../../components/ListDetail'
import client from "../../apollo";
import {AllUsersQuery} from "../index";
import {gql} from "@apollo/client";
import {useRouter} from "next/router";

import useStyles from "./style";


import {CardMedia, Typography, Box, Grid} from "@material-ui/core";


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
    const classes = useStyles();

  return (

    <Layout>
      {/*{item?.username}*/}
      <Box component={"div"}>
          <Grid container spacing={3}>
              <Grid item xs={6}>
                  <CardMedia
                      component="img"
                      src={"https://www.kotaku.com.au/content/uploads/sites/3/2020/04/hunter-x-hunter-crunchyroll-1.jpg"}
                  />
              </Grid>
              <Grid item xs={6}>
          <Typography variant="h5" component="h2" gutterBottom className={classes.text}>
              Name : Bui Nguyen Khoa
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom className={classes.text}>
              Role : Sat thu
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom className={classes.text}>
              Address: 216/1 dien bien phu
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom className={classes.text}>
              Phone number: 0918393035
          </Typography>
          <Typography variant ="body1" gutterBottom>
             I am Bui Nguyen Khoa, I come from VietNam, Vietnam is my homecountry Where I was born at there
          </Typography>
              </Grid>
          </Grid>


    </Box>

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
