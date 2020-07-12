import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import LiList from './LiList';

const Nav = ({ toggleDrawer, open }) => {
    return (
        <Drawer anchor={'left'} open={open} onClose={toggleDrawer}>
            <LiList toggleDrawer={toggleDrawer} />
        </Drawer>
    );
};

export default Nav;
