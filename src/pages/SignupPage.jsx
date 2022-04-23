import { Box, TextField, Button, Typography } from '@mui/material';
import { AuthHeader } from 'components';

const SignupPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AuthHeader />
            <Box sx={{ p: 3 }}>
                <Typography variant="h1" align="center" sx={{ fontSize: '1.6em', pb: 1 }}>Sign up for an account</Typography>
                <TextField label="Name" sx={{ width: '100%', my: 1 }} />
                <TextField label="Username" sx={{ width: '100%', my: 1 }} />
                <TextField label="Password" type="password" sx={{ width: '100%', my: 1 }} />
                <TextField label="Confirm Password" type="password" sx={{ width: '100%', my: 1, pb: 2 }} />
                <Button href="/home" variant="contained" sx={{ width: '100%', my: 1 }}>
                    <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>Sign Up</Typography>
                </Button>
                <Typography align="center" variant="body2" sx={{ color: '#B8B8B8' }}>or</Typography>
                <Button href="/login" variant="outlined" sx={{ width: '100%', my: 1, color: '#B8B8B8', borderColor: '#B8B8B8' }}>
                    <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>Log In</Typography>
                </Button>
            </Box>
        </Box>
    );
};

export { SignupPage };