import { Box, Button, Typography } from '@mui/material';

const StartPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h1">Threads</Typography>
            <Button href="/login" variant="contained" sx={{ width: '90%', my: 1 }}>
                <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>Log In</Typography>
            </Button>
            <Button href="/signup" variant="outlined" sx={{ width: '90%', my: 1 }}>
                <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>Sign Up</Typography>
            </Button>
        </Box >
    );
};

export { StartPage };