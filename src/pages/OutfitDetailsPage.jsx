import { Typography, Box, Link, Paper, List, ListSubheader, ListItem, Button } from '@mui/material';
import { OutfitGrid } from 'components';
import { Routes, Route, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";
import { ItemList, TagList, DateList, Share } from 'components'

const OutfitDetailsPage = () => {

    let params = useParams();
    const id = params.id;
    const outfits = useSelector(selectOutfits);

    let outfit = outfits.filter((o) => o.id == id)[0]
    return (
        <Box sx={{ width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Box sx={{ position: 'fixed', top: 0, left: 0, zIndex: 10, p: 3, pb: 2, width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: 'background.paper' }}>
                <Link href="/history" underline="none">
                    Back
                </Link>
                <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>Outfit Details</Typography>
                <Link href={`/editOutfit/${outfit.id}`} underline="none">
                    Edit
                </Link>
            </Box>
            <Box
                component="img"
                sx={{
                    margin: "1em 0",
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    mt: 6
                }}
                alt="The house from the offer."
                src={`/images/${outfit.imageURL}`}
            />
            <ItemList outfit={outfit} />
            <TagList outfit={outfit} />
            <DateList outfit={outfit} />
            {outfit.notes &&
                <List
                    dense
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader sx={{ mt: 2, mb: 1, color: 'text.primary' }} component="div" ><Typography variant="h2">Outfit Notes</Typography></ListSubheader>}
                >
                    <ListItem><Typography>{outfit.notes}</Typography></ListItem>
                </List>
            }
            <Box style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Button href="/log" variant="contained" sx={{ textTransform: 'capitalize', margin: "1em 16px 0 16px" }}>Wear Again</Button>
                <Share outfit={outfit} />
            </Box>

        </Box>
    );
};

export { OutfitDetailsPage };