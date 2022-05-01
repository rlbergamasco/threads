import React from 'react';
import { Typography, Switch, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsDark, toggleIsDark } from "appSlice";

const SettingsPage = () => {
    const isDark = useSelector(selectIsDark);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant='h1'>
                    Settings
                </Typography>

                <div style={{ display: "flex", verticalAlign: "center", marginTop: "15px" }}>
                    <Typography style={{ marginRight: "auto" }}>Toggle Dark Mode</Typography>

                    <Switch checked={isDark} onChange={() => dispatch(toggleIsDark())} />
                </div>

                <Button href="/">
                    <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>Log Out</Typography>
                </Button>
            </div>
        </React.Fragment>
    );
};

export { SettingsPage };