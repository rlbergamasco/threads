import React from 'react';
import { Typography, Switch, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsDark, toggleIsDark } from "appSlice";

const SettingsPage = () => {
    const isDark = useSelector(selectIsDark);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Typography>
                Settings
            </Typography>
            <Switch checked={isDark} onChange={() => dispatch(toggleIsDark())} />
            <Button href="/">
                <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>Log Out</Typography>
            </Button>
        </React.Fragment>
    );
};

export { SettingsPage };