import { Typography, Box, Button, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { HomePage } from './HomePage';

const LogItemPage = () => {
    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Log an Item</Typography>
                </Box>
            </Box>

            <Box sx={{ mt: 7 }}>
                <Typography variant="h2">Name</Typography>
            </Box>

            <TextField label="" sx={{ width: '100%', my: 1 }} />

            <Box sx={{ mt: 2 }}>
                <Button href="/log" variant="contained" sx={{ textTransform: 'capitalize', width: "100%", height: "300px"}}><Add fontSize="large"/>Tap to add a photo!</Button>
            </Box>

            <Box sx={{ mt: 5 }}>
                <Typography variant="h2">Tags</Typography>
            </Box>


            <Box sx={{ mt: 5 }}>
                <Typography variant="h2">Notes</Typography>
            </Box>

            <TextField label="" sx={{ width: '100%', mt: 1, mb: 5 }} />

            <Box sx={{ position: 'fixed', bottom: 70, left: 0, bgcolor: 'background.paper', width: '100vw', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button href="javascript:history.back()" variant="contained" sx={{ textTransform: 'capitalize', width: '90vw'}}>Save</Button>
            </Box>

        </Box>
    );
};

export { LogItemPage };