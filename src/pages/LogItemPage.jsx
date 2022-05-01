import { Typography, Box, Button } from '@mui/material';
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
                <Typography variant="h2">Date: {HomePage.currentDate}</Typography>
            </Box>

            <Box sx={{ mt: 5 }}>
                <Button href="/log" variant="contained" sx={{ textTransform: 'capitalize', width: "100%", height: "100%" }}><Add fontSize="large" /></Button>
                <Typography align="center" sx={{ py: 1 }}>Tap to add a photo!</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', pb: 2, mt: 5 }}>
                <Typography variant="h2">Clothing Items</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button href="/log" variant="contained" sx={{ textTransform: 'capitalize', width: "50%"}}><Add fontSize="small" />Edit Items in Outfit</Button>
            </Box>

            <Box sx={{ mt: 3 }}>
            <Typography align="center" sx={{ py: 1 }}>Looks like you haven’t added an item yet!</Typography>
            </Box>

            <Box sx={{ mt: 5 }}>
                <Typography variant="h2">Notes</Typography>
            </Box>

            <Box sx={{ mt: 5 }}>
            <Button href="/log" variant="contained" sx={{ textTransform: 'capitalize', width: "30%"}}>Save</Button>
            </Box>



        </Box>
    );
};

export { LogItemPage };