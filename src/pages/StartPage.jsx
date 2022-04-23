import { Box, Button, Typography } from '@mui/material';

const StartPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', p: 3, bgcolor: 'primary.main' }}>
            <Typography variant="h1" color="#fff" sx={{ fontSize: '4.6em', fontStyle: 'italic', pt: '80px', pb: '360px' }}>Threads</Typography>
            <Button href="/login" variant="contained" sx={{ width: '100%', my: 1, backgroundColor: '#fff', color: 'primary.main' }}>
                <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>Log In</Typography>
            </Button>
            <Button href="/signup" variant="outlined" sx={{ width: '100%', my: 1, color: '#fff', borderColor: '#fff' }}>
                <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>Sign Up</Typography>
            </Button>
        </Box >
    );
};

export { StartPage };