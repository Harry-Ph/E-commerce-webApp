import { makeStyles, createStyles, Theme, fade } from '@material-ui/core'

// @ts-ignore
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolBar2__storeIcon: {
        marginRight: theme.spacing(2)
      },
    toolBar2: {
      display: 'flex',
      justifyContent: 'space-between',
    },

    link_custom: {
      textDecoration: 'none',
      color: 'white',
      fontWeight: 'bolder'
    },

    toolBar2__tittle: {
      display: 'grid',
      gridTemplateColumns: '200px 100px 120px 100px ',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },

})
)

// @ts-ignore
export default useStyles