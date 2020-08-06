import {createStyles, makeStyles, Theme} from '@material-ui/core'

// @ts-ignore
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      wrapper: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1280px'
      },
        content__pagination: {
            marginLeft: '20px'
        },
        content__skeleton: {
            margin: '20px',
            zIndex: 1,
            position: 'relative',
        },
        wrapper__loading: {
            zIndex: 20,
            width: '100vw',
            textAlign: 'center',
            position: 'absolute',
            bottom: 500,
        },
        content__tittle: {
            textAlign: 'center',
            padding: '40px',
            fontSize: '52px',
            fontWeight: 'bold'
        },
        content__items: {
            display: 'flex',
            maxHeight: '768px',
            flexWrap: 'wrap'
        },
        content__item: {
            width: '100%',
        },
      lazyLoading: {
        width: '30% !important',
        padding: '24px'
      },
        item__media: {
            width: '80%',
            height: '160px',
            textAlign: 'center',
            margin: '20px',
            padding: '20px'
        },
        item__price: {
            textAlign: 'right',
            color: 'red'
        },
        item__buttons: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        button__addToCart: {
            margin:'5px'
        }
    })
)

export default useStyles