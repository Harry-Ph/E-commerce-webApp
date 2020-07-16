import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import NewReleasesIcon from '@material-ui/icons/NewReleases'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import PinDropIcon from '@material-ui/icons/PinDrop'


import useStyles from './style'
import NavBarItem from '../NavBarItem'

export interface INavBarProps {}

const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar1}>
          <Typography>
            Join Us
          </Typography>
          <div>
            <NewReleasesIcon/>
          </div>
          <div>
            <ContactSupportIcon/>
          </div>
          <div>
            <ShoppingCartIcon/>
          </div>
          <div className={classes.toolBar__location}>
            <div><PinDropIcon/></div>  
          </div>
          <div >Finland</div>
        </Toolbar>
        <div><hr></hr></div>
        <NavBarItem />
      </AppBar>
    </div>
  )
}

export default NavBar
