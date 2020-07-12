import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareButton from './ShareButton';

const useStyles = makeStyles({
    root: {
        maxWidth: 340,
    },
    media: {
        height: 180,
    },
});

const News = ({ newsData: { url, image, title, description, author } }) => {
    const classes = useStyles();
    const openNews = (url) =>
        setTimeout(() => {
            window.open(url);
        }, 150);

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => openNews(url)}>
                <CardMedia className={classes.media} image={image} title={title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ShareButton url={url} />
                <Button size="small" color="primary" onClick={() => openNews(url)}>
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
};

export default News;
