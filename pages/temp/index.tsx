import React from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import useStyles from './style'

const ProductDetail = () => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.img}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRROrogs_AtLLQ3iO8Ji3UsVNGhqgGKCqOt7Q&usqp=CAU"
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent>
                    <Typography component="h1" variant="h3">
                        Name
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Price
                    </Typography>
                    <Typography variant="h5" color="textSecondary">
                        isAvailable
                    </Typography>
                    <Typography variant="subtitle2">
                        desc
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Add to cart
                    </Button>
                </CardActions>
            </div>
        </Card>
    );
}

export default ProductDetail
