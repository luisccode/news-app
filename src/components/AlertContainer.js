import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Container from '@material-ui/core/Container';
import { capitalize } from '../helpers';

const useStyles = makeStyles(() => ({
    root: {
        width: '60%',
        marginTop: 25,
    },
}));
const AlertContainer = ({ query, type, message, messageStrong }) => {
    const classes = useStyles();

    return (
        <Container className={classes.root} justify={'center'}>
            <Alert severity={type}>
                <AlertTitle>{capitalize(type)}</AlertTitle>
                {message}
                <strong>{messageStrong}</strong>
            </Alert>
        </Container>
    );
};

export default AlertContainer;
