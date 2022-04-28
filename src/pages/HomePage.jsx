import { Typography, Box, Button, Card, CardActionArea } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { Add } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";

const HomePage = () => {
    const outfits = useSelector(selectOutfits);
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
        case (hour < 24):
            timeOfDay = "Evening"
            break;
    }

    const todayDateLong = unformattedDate.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
    const todayOutfits = outfits.filter(outfit => new Date(outfit.date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }) === todayDateLong);
    console.log(unformattedDate.getTime())
    return (
        <Box>
            <Typography variant="h1">Good {timeOfDay}!</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 2 }}>
                <Typography variant="h2">{currentDate}</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <FontAwesomeIcon icon={faCloudSun} size="sm" style={{ padding: 3 }} />
                <Typography>72&#176;</Typography>
            </Box>
            <Typography variant="h2">Today's Outfit{todayOutfits.length > 1 ? "s" : ""}</Typography>
            {todayOutfits.length === 0 ?
                <Box>
                    <Typography align="center" sx={{ py: 1 }}>Looks like you haven’t logged an outfit yet!</Typography>
                    <Button href="/log" variant="contained" sx={{ textTransform: 'capitalize', width: "100%" }}><Add fontSize="small" />Log Outfit</Button>
                </Box>
                :
                <Box>
                    {todayOutfits.map((outfit, i) => <HomeOutfitCard key={i} outfit={outfit} />)}
                    <Button href="/log" variant="contained" sx={{ textTransform: 'capitalize', width: "100%", mt: 1 }}><Add fontSize="small" />Log Another Outfit</Button>
                </Box>
            }
            {/* <Typography variant="h2" sx={{ pt: 2 }}>Outfit suggestions based on weather</Typography> */}
        </Box >
    );
};

const HomeOutfitCard = ({ outfit }) => {
    return (
        <Box sx={{ width: '100%', mt: 1 }}>
            {/* <a> */}
            <img src={`/images/${outfit.imageURL}`} style={{ width: '100%' }} />
            {/* </a> */}
        </Box>
    );
};

export { HomePage };