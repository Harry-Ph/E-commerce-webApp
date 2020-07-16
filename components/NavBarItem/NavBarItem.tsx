import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';

import useStyles from './style'

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
      <Typography>
        NEW RELEASES
      </Typography>
      <Typography>
        MEN
      </Typography>
      <Typography>
        WOMEN
      </Typography>
      <Typography>
        KIDS
      </Typography>
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