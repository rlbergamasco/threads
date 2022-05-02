import { Typography, Box, Button, TextField } from '@mui/material';
import { Add, AddAPhoto } from '@mui/icons-material';
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

            <Box href="" variant="contained" 
                sx={{ mt: 2, mx: 3, display: "flex", justifyContent: "center", alignItems: "center", textTransform: 'capitalize', width: "350px", height: "350px", bgcolor: 'text.disabled', borderRadius: "3%"}}>
                <AddAPhoto fontSize="large"></AddAPhoto>
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

            <TextField label="" sx={{ width: '100%', my: 1, mb: 5 }} />

            <Box sx={{ position: 'fixed', bottom: 70, left: 0, bgcolor: 'background.paper', width: '100vw', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button href="/home" variant="contained" sx={{ textTransform: 'capitalize', width: '90vw'}}>Save</Button>
            </Box>

        </Box>
    );
};

export { LogOutfitPage };