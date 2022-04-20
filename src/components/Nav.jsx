import { Typography } from '@mui/material';

const Nav = () => {
    return (
        <Typography>
            <a href="/home">Home</a><br />
            <a href="/history">History</a><br />
            <a href="/closet">Closet</a><br />
            <a href="/settings">Settings</a>
        </Typography>
    );
};

export { Nav };