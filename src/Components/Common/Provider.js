import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        padding: 24
    },
    media: {
        height: '220px',
        width: '220px'
    },
    displayCard: {
        flexDirection: 'row',
        display: 'flex'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

function Provider(props) {
    const classes = useStyles();

    return <><Card className={classes.root}>
        <div className={classes.displayCard}>
            <img
                className={classes.media}
                src={props.provider.attributes["profile-image"]}
                alt={props.provider.attributes.name}
            /><CardContent>
                <Typography variant="h5" color="textSecondary" component="p">
                    {props.provider.attributes.name}
                </Typography>

                {props.provider.attributes.subspecialties.map(sp => <Typography variant="h6" key={sp} color="textSecondary" component="p">
                    {sp}</Typography>)}

            </CardContent>
        </div>
    </Card>
    </>;
}

export default Provider;