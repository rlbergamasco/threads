import { List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Avatar, ListSubheader, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";

const DateList = ({ outfit }) => {

    const outfitId = outfit.id;
    const allOutfits = useSelector(selectOutfits);
    const dates = allOutfits.filter((testOutfit) => testOutfit.id == outfitId).map((outfit) => outfit.date);
    console.log(dates);
    let uniqDates = [...new Set(dates)];


    return (
        <List 
            dense 
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
            subheader={<ListSubheader sx={{margin: "1em 0", color: "black"}} component="div" ><Typography variant="h2">Dates Worn</Typography></ListSubheader>}
        >
        <div style={{display: "flex", flexWrap: "wrap", width: "100%", padding: "0 16px 0 16px"}}>

        {uniqDates.map((date) => {
            let formattedDate = new Date(outfit.date);

            return (
                <ListItem
                key={date}
                disablePadding
                sx={{width: "auto"}}
                >
                    <Typography variant="h2">{formattedDate.toLocaleDateString()}</Typography>
                </ListItem>
                );
        })}
        </div>
    </List>
    )
}

export { DateList };
