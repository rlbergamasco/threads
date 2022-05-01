import { Typography, Box, Button, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { OutfitCard } from 'components';
import { HomePage } from './HomePage';

const LogOutfitPage = () => {
    const unformattedDate = new Date()
    const currentDate = unformattedDate.toLocaleDateString('en-us', { weekday: "long", month: "long", day: "numeric" })
    const hour = unformattedDate.getHours();
    let timeOfDay = "Morning"
    switch (true) {
        case (hour < 12):
            timeOfDay = "Morning"
            break;
        case (hour < 16):
            timeOfDay = "Afternoon"
            break;
        default:
            timeOfDay = "Evening"
            break;
    }

    const todayDateLong = unformattedDate.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
    console.log(unformattedDate.getTime())

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Log an Outfit</Typography>
                </Box>
            </Box>

            <Box sx={{ mt: 7 }}>
                <Typography variant="h2">Date: {currentDate}</Typography>
            </Box>

            <Box sx={{ mt: 5 }}>
                <Button href="/log" variant="contained" sx={{ textTransform: 'capitalize', width: "100%", height: "300px"}}><Add fontSize="large"/>Tap to add a photo!</Button>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', pb: 2, mt: 5 }}>
                <Typography variant="h2">Clothing Items</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button href="/findItem" variant="contained" sx={{ textTransform: 'capitalize', width: "50%"}}><Add fontSize="small" />Edit Items in Outfit</Button>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography align="center" sx={{ py: 1 }}>Looks like you haven’t added an item yet!</Typography>
            </Box>

            <Box sx={{ mt: 5 }}>
                <Typography variant="h2">Notes</Typography>
            </Box>

            <TextField label="" sx={{ width: '100%', my: 1 }} />

            <Box sx={{ mt: 5 }}>
            <Button href="/home" variant="contained" align="center" sx={{ textTransform: 'capitalize', width: "100%"}}>Save</Button>
            </Box>



        </Box>
    );
};

export { LogOutfitPage };