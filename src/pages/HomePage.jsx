import { Typography, Box, Button, Grid } from '@mui/material';
import { ItemCard } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { Add } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectOutfits, selectItems, selectTags } from "appSlice";
import { useState } from 'react';
import fetchWeather from '../data/weather'
import { getHomepageStats } from 'statsAndThings';

const HomePage = () => {
    const outfits = useSelector(selectOutfits);
    const items = useSelector(selectItems);
    const tags = useSelector(selectTags);

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
    const todayOutfits = outfits.filter(outfit => new Date(outfit.date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }) === todayDateLong);

    const [temperature, setTemperature] = useState(undefined);
    const [weatherIcon, setWeatherIcon] = useState(undefined);

    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetchWeather(lat, lon)
            .then(weatherData => {
                setTemperature(weatherData.temperature);
                setWeatherIcon(weatherData.icon);
            })
    })

    const stats = getHomepageStats(items, outfits, tags);

    return (
        <Box>
            <Typography variant="h1">Good {timeOfDay}!</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', pb: 2, mt: 2 }}>
                <Typography variant="h2">{currentDate}</Typography>
                <Box sx={{ flexGrow: 1 }} />

                <FontAwesomeIcon icon={weatherIcon || faCloudSun} size="sm" style={{ padding: 3 }} />
                <Typography>{temperature || 72}??</Typography>
            </Box>

            <Typography variant="h2">Today's Outfit{todayOutfits.length > 1 ? "s" : ""}</Typography>

            {todayOutfits.length === 0 ?
                <Box>
                    <Typography align="center" sx={{ py: 1 }}>Looks like you haven???t logged an outfit yet!</Typography>
                    <Button href="/log" variant="contained" sx={{ textTransform: 'capitalize', width: "100%" }}><Add fontSize="small" />Log Outfit</Button>
                </Box>
                :
                <Box>
                    {todayOutfits.map((outfit, i) => <HomeOutfitCard key={i} outfit={outfit} />)}
                    <Button href="/log" variant="contained" sx={{ textTransform: 'capitalize', width: "100%", mt: 1 }}><Add fontSize="small" />Log Another Outfit</Button>
                </Box>
            }

            <Typography variant="h2" sx={{ pt: 2 }}>Clothing Type Stats</Typography>

            {stats.clothingTypeStats.map((clothingTypeStats, i) =>
                <Box sx={{ my: 2 }} key={clothingTypeStats.clothingType}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                        <Grid item key={i} xs={6} >
                            <Typography variant="h2" align="center" sx={{ pb: 1 }}>Most worn {clothingTypeStats.clothingType}</Typography>
                            <ItemCard textVariant="body1" item={clothingTypeStats.mostWornInfo.item} />
                        </Grid>
                        <Grid item key={i * (-1) - 1} xs={6} >
                            <Typography variant="h2" align="center" sx={{ pb: 1 }}>Least worn {clothingTypeStats.clothingType}</Typography>
                            <ItemCard textVariant="body1" item={clothingTypeStats.leastWornInfo.item} />
                        </Grid>
                    </Grid>
                </Box>
            )}
        </Box >
    );
};

const HomeOutfitCard = ({ outfit }) => {
    return (
        <Box sx={{ width: '100%', mt: 1 }}>
            {/* <a> */}
            <img src={outfit.imageURL} style={{ width: '100%' }} />
            {/* </a> */}
        </Box>
    );
};

export { HomePage };