import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: 10,
    },
}));
const Heading = ({ title, setCategory }) => {
    const classes = useStyles();
    const path = useLocation().pathname;
    const category = path === '/' ? 'general' : path.replace('/', '');
    useEffect(() => {
        setCategory(category);
        // eslint-disable-next-line
    }, []);
    return (
        <React.Fragment>
            <Typography className={classes.title} variant="h3" align="center">
                {title}
            </Typography>
        </React.Fragment>
    );
};

export default Heading;
