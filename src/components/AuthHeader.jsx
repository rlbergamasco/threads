import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const AuthHeader = () => {
    return (
        <Box sx={{ width: '100vw', p: 3, bgcolor: 'primary.main' }}>
            <a href="/"><FontAwesomeIcon icon={faAngleLeft} inverse size="lg" style={{ position: 'absolute' }} /></a>
            <Typography align="center" variant="h1" color="#fff" sx={{ fontSize: '4.6em', fontStyle: 'italic', pt: '80px', pb: '80px' }}>Threads</Typography>
        </Box >
    );
};

export { AuthHeader };