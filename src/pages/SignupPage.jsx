import { Box, TextField, Button, Typography } from '@mui/material';

const SignupPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField label="Name" sx={{ width: '90%', my: 1 }} />
            <TextField label="Username" sx={{ width: '90%', my: 1 }} />
            <TextField label="Password" sx={{ width: '90%', my: 1 }} />
            <TextField label="Confirm Password" sx={{ width: '90%', my: 1 }} />
            <Button href="/home" variant="contained" sx={{ width: '90%', my: 1 }}>
                <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>Sign Up</Typography>
            </Button>
        </Box >
    );
};

export { SignupPage };