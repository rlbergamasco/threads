import { Box, TextField, Button, Typography } from '@mui/material';
import { AuthHeader } from 'components';

const LoginPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AuthHeader />
            <Box sx={{ p: 3, width: '100%' }}>
                <Box sx={{ py: 6 }}>
                    <Typography variant="h1" align="center" sx={{ fontSize: '1.6em', pb: 1 }}>Log in to your account</Typography>
                    <TextField label="Username" sx={{ width: '100%', my: 1 }} />
                    <Typography color="primary" align="right">Forgot username?</Typography>
                    <TextField label="Password" type="password" sx={{ width: '100%', my: 1 }} />
                    <Typography color="primary" align="right">Forgot password?</Typography>
                </Box>
                <Button href="/home" variant="contained" sx={{ width: '100%', my: 1 }}>
                    <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>Log In</Typography>
                </Button>
                <Typography align="center" variant="body2" sx={{ color: '#B8B8B8' }}>or</Typography>
                <Button href="/signup" variant="outlined" sx={{ width: '100%', my: 1, color: '#B8B8B8', borderColor: '#B8B8B8' }}>
                    <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>Sign Up</Typography>
                </Button>
            </Box>
        </Box>
    );
};

export { LoginPage };