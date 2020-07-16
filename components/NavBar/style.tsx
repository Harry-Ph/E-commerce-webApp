import { makeStyles, createStyles, Theme} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    toolBar1: {
      display: 'grid',
      gridTemplateColumns: '80px auto 40px 40px 24px 40px',
    },
    toolBar__location: {
      display: 'flex'
    },
  })
)

export default useStyles
