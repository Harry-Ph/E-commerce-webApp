import useStyles from './products/style'
import {Product} from "../interfaces";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import React from "react";
import Box from "@material-ui/core/Box";


export interface  IProducts {
    products: Product[]
}
// @ts-ignore
export default function AboutPage() {
    const classes = useStyles();
    const devs = [
        {
            name: 'Phan Hong Duc',
            Career: 'Full stack developer in JS/TS and Java',
            'Tech-skills': 'TS, ReactJS, NextJS, NodeJS, Express, GraphQL, MongoDB, Postgres, MySQL, Java, Vaadin, Git',
            Address: 'Helsinki, Finland',
            img: '/img/Duc-Phan.jpg',
            github: 'https://github.com/hongduc-phan'
        },
        {
            name: 'Phan Hong Phat',
            Career: 'Full stack developer in JS/TS',
            'Tech-skills': 'TS, ReactJS, NextJS, NodeJS, Express, GraphQL, MongoDB, Postgres, MySQL, Git',
            Address: 'Helsinki, Finland',
            img: '/img/Phat-Phan.jpg',
            github: 'https://github.com/phanhongphat'
        },
        {
            name: 'Phan Thanh Dat',
            Career: 'Full stack developer in JS/TS and Java',
            'Tech-skills': 'TS, ReactJS, NextJS, NodeJS, Express, GraphQL, MongoDB, Postgres, MySQL, Java, Vaadin, Git',
            Address: 'Helsinki, Finland',
            img: '/img/Dat-Phan.jpg',
            github: 'https://github.com/ptdatkhtn'
        }
    ]
    return <Box className={classes.content__about}>
        {
            devs?.map((dev)=> (<Card className={classes.content__item_about}>
                <CardActionArea>
                    <CardMedia className={classes.item__media}
                               image={dev.img}
                               title={dev.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {dev.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {dev['Tech-skills']}
                        </Typography>
                        <Typography className={classes.item__price} >{dev.Career}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href={dev.github}>
                        Github
                    </a>

                </CardActions>
            </Card>))
        }
    </Box>
}

