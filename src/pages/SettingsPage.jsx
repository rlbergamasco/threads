import React from 'react';
import { Typography, Switch, Button, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsDark, toggleIsDark } from "appSlice";

const SettingsPage = () => {
    const isDark = useSelector(selectIsDark);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Typography variant="h1">Settings</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 2 }}></Box>
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 2 }}>
                <Typography variant="h2"> Light/Dark Mode</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Switch checked={isDark} onChange={() => dispatch(toggleIsDark())} />
            </Box>
            <Button href="/">
                <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>Log Out</Typography>
            </Button>
        </React.Fragment>
    );
};

export { SettingsPage };