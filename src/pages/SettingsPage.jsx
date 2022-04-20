import React from 'react';
import { Typography, Switch } from '@mui/material';
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
        </React.Fragment>
    );
};

export { SettingsPage };