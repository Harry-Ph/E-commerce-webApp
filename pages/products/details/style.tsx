import {createStyles, Theme, makeStyles} from "@material-ui/core";

// @ts-ignore
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: '50px'
        },
        item__img: {
            padding: '5px'
        },
        grid__img: {
            margin: "0px 60px 10px 80px",
        },
        buttons: {
            padding: '20px',
        },
        content__subheading: {
            margin: '20px 0'
        },
        content__description: {
            margin: '10px 0'
        }

    })
);
export default useStyles