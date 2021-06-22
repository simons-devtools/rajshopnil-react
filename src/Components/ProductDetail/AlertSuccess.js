import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const AlertWarning = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                <strong>Congratulation! You are added this product of your cart.....!!</strong>
            </Alert>
        </div>
    );
}
export default AlertWarning;