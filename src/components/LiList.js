import React from 'react';
import { getPageCategories, capitalize } from '../helpers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    list: {
        width: 250,
    },
    link: {},
});
const LiList = ({ toggleDrawer }) => {
    const classes = useStyles();
    return (
        <div
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
            className={classes.list}
        >
            <List>
                {getPageCategories().map((categ) => (
                    <ListItem button key={categ} component={Link} to={`/${categ}`}>
                        <ListItemText primary={capitalize(categ)} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default LiList;
