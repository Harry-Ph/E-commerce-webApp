import {makeStyles, Theme} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            marginTop: theme.spacing(2)
        },
        btnSubmit: {
            background: '#2b2bd7',
            color: '#ece6e6',
            marginTop: theme.spacing(5),
            float: 'right'
        },
        error: {
            color: '#ec2626'
        }
    })
)

export default useStyles