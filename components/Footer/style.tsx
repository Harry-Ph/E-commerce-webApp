import { makeStyles, createStyles, Theme} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: 'black',
      color: 'white'
    },
    footer__info: {
      padding: '16px 0 0 0',
      display: 'grid',
      gridTemplateColumns: '16% 16% 16% 48%',
      justifyItems: 'end'
    },
    footer__address: {
      padding: '16px 0 0 0',
      display: 'grid',
      gridTemplateColumns: '2% 6% 60% 6% 8% 8% 12%',
      justifyItems: 'start'
    },
    info__store: {
      fontFamily: 'Nike TG,Helvetica Neue,Helvetica,Arial,sans-serif',
      fontSize: '14px'
    },
    footer__tittle: {
      padding: '4px 0 4px 0'
    },
    footer__modify: {
      fontSize: '12px',
      padding: '4px 0 4px 0',
      color: 'grey'
    },
    footer__icon: {
      display: 'grid',
      gridTemplateColumns: '40px 40px 40px 40px',
    },
    footer__Location: {
      fontSize: '12px',
      padding: '0 0 0 20px',
    },
  })
)

export default useStyles