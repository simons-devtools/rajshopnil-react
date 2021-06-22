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
            <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                <strong>You are allready added this product! Please check your cart OR try to another product.....!!</strong>
            </Alert>
        </div>
    );
}
export default AlertWarning;