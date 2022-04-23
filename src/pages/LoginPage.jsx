import { TextField, Button } from '@mui/material';

const LoginPage = () => {
    return (
        <div>
            <TextField label="Username" />
            <TextField label="Password" />
            <Button href="/home">Log In</Button>
        </div >
    );
};

export { LoginPage };