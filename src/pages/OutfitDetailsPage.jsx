import { Typography, Box, Link, Paper, List, ListSubheader, ListItem, Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { OutfitGrid } from 'components';
import { Routes, Route, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";
import { ItemList, TagList, DateList } from 'components'

const OutfitDetailsPage = () => {
    
    let params = useParams();
    const id = params.id;
    const outfits = useSelector(selectOutfits);

    let outfit = outfits.filter((o) => o.id == id)[0]
    return (
        <Box sx={{width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Box sx={{width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Link href="/history" underline="none">
                Back
            </Link>
            <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>Outfit Details</Typography>
            <Link href="#" underline="none">
                Edit
            </Link>
            </Box>
            <Box
                component="img"
                sx={{
                    margin: "1em 0",
                    width: "300px",
                    height: "300px",
                    objectFit: "cover"
                }}
                alt="The house from the offer."
                src={`/images/${outfit.imageURL}`}
            />
            <ItemList outfit={outfit}/>
            <TagList outfit={outfit}/>
            <DateList outfit={outfit}/>
            {outfit.notes && 
                <List
                    dense 
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                    subheader={<ListSubheader sx={{margin: "1em 0", color: "black"}} component="div" ><Typography variant="h2">Outfit Notes</Typography></ListSubheader>}
                >
                    <ListItem><Typography variant="h2">{outfit.notes}</Typography></ListItem>
                </List>
            }
            <Box>
            <Button href="/findItem" variant="contained" sx={{ textTransform: 'capitalize', margin: "1em 16px 0 16px"}}>Wear Again</Button>
            <Button href="/findItem" variant="contained" sx={{ textTransform: 'capitalize', margin: "1em 16px 0 16px"}}>Share <ShareIcon sx={{marginLeft: "5px"}} fontSize="small"/></Button>

            </Box>
           
        </Box>
    );
};

export { OutfitDetailsPage };