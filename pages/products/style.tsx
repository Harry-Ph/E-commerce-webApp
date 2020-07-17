import { makeStyles, createStyles, Theme} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content__tittle: {
        textAlign: 'center',
        padding: '40px',
        fontSize: '40px'
    },
    content__items: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    content__item : {
        width: '30%',
        margin: '20px'
    },
    item__media: {
        width: '80%',
        height: '320px',
        textAlign: 'center',    
        marginLeft: '20px'
    },
    item__price: {
        textAlign: 'right',
        color: 'red'
    }

  })
)

export default useStyles