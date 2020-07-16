import React from 'react'
import useStyles from './style'
import { Typography } from '@material-ui/core'

export interface IFooterProps {}

const Footer = () => {
    const classes = useStyles()
  
    return (
       <div className={classes.footer}>
            <div className={classes.footer__info}>
                <div className={classes.info__store}>
                    <Typography>GIFT CARDS</Typography>
                    <Typography>FIND STORES</Typography>
                    <Typography>SIGN UP FOR EMAIL</Typography>
                    <Typography>BECOME A MEMBER</Typography>
                    <Typography>STUDENT DISCOUNT</Typography>
                </div>
                <div className={classes.info}>
                    <Typography>GET HELP</Typography>
                    <Typography>Order Status</Typography>
                    <Typography>Shipping and Delivery</Typography>
                    <Typography>Returns</Typography>
                    <Typography>Payment Options</Typography>
                    <Typography>Contact Us</Typography>
                </div>
                <div className={classes.info}>
                    <Typography>ABOUT US</Typography>
                    <Typography>News</Typography>
                    <Typography>Careers</Typography>
                    <Typography>Investors</Typography>
                    <Typography>Subtainablity</Typography>
                </div>
                <div className={classes.footer__icon}>
                </div>
            </div>
       </div>
      )
    }
    
    export default Footer