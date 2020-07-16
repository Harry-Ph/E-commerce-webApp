import {createStyles} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'grid',
            gridTemplateColumns: '60% 40%',
        },
        img: {
            maxWidth: '800px',
            minHeight: '600px',
            backgroundSize: 'contain',
            imageRendering: 'pixelated'
        },
        details: {
            padding: '0 40px',
        }
    })
);

export default useStyles