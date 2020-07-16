import React from 'react'
import useStyles from './style'
import { Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import TwitterIcon from '@material-ui/icons/Twitter'
import LocationOnIcon from '@material-ui/icons/LocationOn'

export interface IFooterProps {}

const Footer = () => {
    const classes = useStyles()
  
    return (
       <div className={classes.footer}>
            <div className={classes.footer__info}>
                <div className={classes.info__store}>
                    <Typography className={classes.footer__tittle}>GIFT CARDS</Typography>
                    <Typography className={classes.footer__tittle}>FIND STORES</Typography>
                    <Typography className={classes.footer__tittle}>SIGN UP FOR EMAIL</Typography>
                    <Typography className={classes.footer__tittle}>BECOME A MEMBER</Typography>
                    <Typography className={classes.footer__tittle}>STUDENT DISCOUNT</Typography>
                </div>
                <div className={classes.info}>
                    <Typography className={classes.footer__tittle}>GET HELP</Typography>
                    <Typography className={classes.footer__modify}>Order Status</Typography>
                    <Typography className={classes.footer__modify}>Shipping and Delivery</Typography>
                    <Typography className={classes.footer__modify}>Returns</Typography>
                    <Typography className={classes.footer__modify}>Payment Options</Typography>
                    <Typography className={classes.footer__modify}>Contact Us</Typography>
                </div>
                <div className={classes.info}>
                    <Typography className={classes.footer__tittle}>ABOUT US</Typography>
                    <Typography className={classes.footer__modify}>News</Typography>
                    <Typography className={classes.footer__modify}>Careers</Typography>
                    <Typography className={classes.footer__modify}>Investors</Typography>
                    <Typography className={classes.footer__modify}>Subtainablity</Typography>
                </div>
                <div className={classes.footer__icon}>
                    <FacebookIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                    <TwitterIcon />
                </div>
            </div>
            <div>
                <hr/>
            </div>
            <div className={classes.footer__address}>
                <Typography className={classes.footer__Location}><LocationOnIcon /></Typography>
                <Typography className={classes.footer__Location}>Finland</Typography>
                <Typography className={classes.footer__modify}>© 2020 Nike, Inc. All Rights Reserved</Typography>
                <Typography className={classes.footer__modify}>Guides</Typography>
                <Typography className={classes.footer__modify}>Terms of Use</Typography>
                <Typography className={classes.footer__modify}>Terms of Sale</Typography>
                <Typography className={classes.footer__modify}>Cookie Settings</Typography>
            </div>
       </div>
      )
    }
    
    export default Footer