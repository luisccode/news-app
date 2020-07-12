import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const ShareButton = ({ url }) => {
    const [open, setOpen] = React.useState(null);

    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?text=${url}`,
        whatsapp: `whatsapp://send?text=${url}`,
    };

    const handleClick = (e) => {
        if (navigator.share) {
            navigator
                .share({
                    title: 'Share this news',
                    url,
                })
                .then(() => console.log('shared news'))
                .catch(() => console.log('something is wrong'));
            return;
        }
        setOpen(e.currentTarget);
    };

    const handleClose = (url) => {
        window.open(url);
        setOpen(null);
    };
    return (
        <React.Fragment>
            <Button size="small" color="primary" onClick={handleClick}>
                Share
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleClose(urls.facebook)}>Facebook</MenuItem>
                <MenuItem onClick={() => handleClose(urls.twitter)}>Twitter</MenuItem>
                <MenuItem onClick={() => handleClose(urls.whatsapp)}>Whatsapp</MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default ShareButton;
