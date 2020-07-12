import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});
const createTimer = (max, setProgress, setLoading) => {
    return setInterval(() => {
        setProgress((oldProgress) => {
            if (oldProgress === 100) {
                setTimeout(() => {
                    setLoading({ status: false, maxPercent: 0 });
                }, 150);
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, max);
        });
    }, 200);
};

const ProgressBar = ({ loading: { status, maxPercent }, setLoading }) => {
    const classes = useStyles();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timer = status
            ? createTimer(maxPercent, setProgress, setLoading)
            : createTimer(maxPercent, setProgress, setLoading);
        return () => {
            clearInterval(timer);
        };
        // eslint-disable-next-line
    }, [status, maxPercent]);

    return (
        <div className={classes.root}>
            <LinearProgress variant="determinate" value={progress} />
        </div>
    );
};
export default ProgressBar;
