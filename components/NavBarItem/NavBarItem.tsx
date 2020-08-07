import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';

import useStyles from './style'
import Link from "next/link";

export interface INavBarItemProps {}

const NavBarItem = () => {
  const classes = useStyles()
  return (
    <Toolbar className={classes.toolBar2}>
    <IconButton
      className={classes.toolBar2__storeIcon}
      color="inherit"
    >
      <StoreMallDirectoryIcon/>
    </IconButton>
   <div className={classes.toolBar2__tittle}>
      <Link href='/products'  >
        <a className={classes.link_custom}>
          PRODUCTS
        </a>
      </Link>
     <Link href='/users'>
       <a className={classes.link_custom}>
         USERS
       </a>
     </Link>
     <Link href='/about'>
       <a className={classes.link_custom}>
         ABOUT
       </a>
     </Link>
    </div>
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  </Toolbar>
    )
}

export default NavBarItem