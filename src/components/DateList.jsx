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
            subheader={<ListSubheader sx={{margin: "1em 0", color: 'text.primary'}} component="div" ><Typography variant="h2">Dates Worn</Typography></ListSubheader>}
        >

        {uniqDates.map((date) => {
            let formattedDate = new Date(date);

            return (
                <ListItem
                key={date}
                disablePadding
                sx={{marginLeft: "16px"}}
                >
                    <Typography variant="h2">{formattedDate.toLocaleDateString()}</Typography>
                </ListItem>
                );
        })}
      
    </List>
    )
}

export { DateList };
