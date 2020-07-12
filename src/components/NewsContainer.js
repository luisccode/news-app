import React from 'react';
import News from './News';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 40,
    },
    item: {
        marginBottom: 30,
    },
}));
const NewsContainer = ({ news }) => {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container justify={'space-evenly'}>
            {news.map((newsData) =>
                newsData.image !== 'None' ? (
                    <Grid className={classes.item} item key={newsData.url}>
                        <News newsData={newsData} />
                    </Grid>
                ) : null
            )}
        </Grid>
    );
};

export default NewsContainer;
