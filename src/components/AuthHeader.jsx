import { Box, Typography } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
const AuthHeader = () => {
    return (
        <Box sx={{ width: '100vw', p: 3, bgcolor: 'primary.main' }}>
            <a href="/"><ArrowBackIosNew style={{ position: 'absolute', color: '#fff' }} /></a>
            <Typography align="center" variant="h1" color="#fff" sx={{ fontSize: '4.6em', fontStyle: 'italic', pt: '80px', pb: '80px' }}>Threads</Typography>
        </Box >
    );
};

export { AuthHeader };