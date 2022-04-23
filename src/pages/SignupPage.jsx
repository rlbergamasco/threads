import { TextField, Button } from '@mui/material';

const SignupPage = () => {
    return (
        <div>
            <TextField label="Name" />
            <TextField label="Username" />
            <TextField label="Password" />
            <TextField label="Confirm Password" />
            <Button href="/home">Sign Up</Button>
        </div >
    );
};

export { SignupPage };