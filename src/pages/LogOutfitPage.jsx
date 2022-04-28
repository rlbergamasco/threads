import { Typography, Box } from '@mui/material';

const LogOutfitPage = () => {
    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Log an Outfit</Typography>
                </Box>
            </Box>
            <Box sx={{ mt: 7 }}>
                <Typography>Content Here</Typography>
            </Box>
        </Box>
    );
};

export { LogOutfitPage };