import React from 'react'
import useStyles from './style'
import { Card, CardMedia, CardContent, Typography, CardActionArea, CardActions, Button } from '@material-ui/core'

export interface IContentProps {}

const Content = () => {
    const classes = useStyles()
  
    return (
        <div className={classes.wrapper}>
            <div className={classes.content__tittle}>
                <div>POPULAR PRODUCTS</div>
            </div>
            <div className={classes.content__items}>
                <Card className={classes.content__item}>
                    <CardActionArea>
                        <CardMedia className={classes.item__media}
                            image="https://cdn.bike24.net/i/mb/d8/fa/b2/277893-00-d-557791.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Nike Air Max Axis Women's Shoe - guava ice/guava ice-white AA2168-800
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Maximum impact cushioning. The brutal, repetitive, 
                            downward force of sport can wreak havoc on the body and on performance. 
                            Max Air cushioning is specifically engineered to handle these impacts and provide protection. 
                            Max Air is big air designed to take a pounding.
                            </Typography>
                            <Typography className={classes.item__price} >PRICE: 60.0 Euro</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Add To Cart
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>

                <Card className={classes.content__item}>
                    <CardActionArea>
                        <CardMedia className={classes.item__media}
                            image="https://cdn.bike24.net/i/mb/d8/fa/b2/277893-00-d-557791.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Nike Air Max Axis Women's Shoe - guava ice/guava ice-white AA2168-800
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Maximum impact cushioning. The brutal, repetitive, 
                            downward force of sport can wreak havoc on the body and on performance. 
                            Max Air cushioning is specifically engineered to handle these impacts and provide protection. 
                            Max Air is big air designed to take a pounding.
                            </Typography>
                            <Typography className={classes.item__price} >PRICE: 60.0 Euro</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Add To Cart
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.content__item}>
                    <CardActionArea>
                        <CardMedia className={classes.item__media}
                            image="https://cdn.bike24.net/i/mb/d8/fa/b2/277893-00-d-557791.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Nike Air Max Axis Women's Shoe - guava ice/guava ice-white AA2168-800
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Maximum impact cushioning. The brutal, repetitive, 
                            downward force of sport can wreak havoc on the body and on performance. 
                            Max Air cushioning is specifically engineered to handle these impacts and provide protection. 
                            Max Air is big air designed to take a pounding.
                            </Typography>
                            <Typography className={classes.item__price} >PRICE: 60.0 Euro</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Add To Cart
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
        )
}

export default Content