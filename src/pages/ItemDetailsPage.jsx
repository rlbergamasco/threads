import { Typography, Box, Link, Paper, List, ListSubheader, ListItem, Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { OutfitGrid } from 'components';
import { Routes, Route, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectItems, selectOutfits } from "appSlice";
import { ItemList, TagList, DateList, OutfitList } from 'components'

const ItemDetailsPage = () => {

    let params = useParams();
    const id = params.id;
    const items = useSelector(selectItems);
    let outfits = useSelector(selectOutfits);

    let item = items.filter((i) => i.id == id)[0]
    // console.log(item);
    let imageURL = "";
    let imageRelX = "";
    let imageRelY = "";
    // Getting imageURL for outfit if not supplied
    if (!item.imageURL) {
        let outfitsSorted = [...outfits].sort((a, b) => b.date - a.date);
        for (let outfit of outfitsSorted) {
            // console.log(outfit)
            for (let item of outfit.items) {
                if (item.itemId === id) {
                    imageURL = outfit.imageURL;
                    imageRelY = (item.imageRelativeY * 100).toString();
                    imageRelX = (item.imageRelativeX * 100).toString();
                }
            }
        }
    }






    return (
        <Box sx={{ width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Box sx={{ position: 'fixed', top: 0, left: 0, zIndex: 10, p: 3, pb: 2, width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: 'background.paper' }}>
                <Link href="/closet" underline="none">
                    Back
                </Link>
                <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>Item Details</Typography>
                <Link href={`/editItem/${item.id}`} underline="none">
                    Edit
                </Link>
            </Box>
            <Box
                sx={{
                    margin: "1em 0",
                    mt: 6
                }}
            >
                <div style={{ width: "300px", height: "300px", overflow: "hidden" }}>
                    <img style={{ margin: "0 0 0 -30%", width: "150%", height: "300px", objectFit: "cover", objectPosition: `${imageRelX}% ${imageRelY}%` }} src={`/images/${imageURL}`}></img>
                </div>
            </Box>
            <Typography variant="h2">{item.name}</Typography>
            <TagList item={item} />
            {item.notes &&
                <List
                    dense
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader sx={{ mt: 2, mb: 1, color: 'text.primary' }} component="div" ><Typography variant="h2">Item Notes</Typography></ListSubheader>}
                >
                    <ListItem><Typography>{item.notes}</Typography></ListItem>
                </List>
            }
            <OutfitList item={item} />
            {/* <ItemList outfit={outfit}/>
            <TagList outfit={outfit}/>
            <DateList outfit={outfit}/>
            {outfit.notes && 
                <List
                    dense 
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                    subheader={<ListSubheader sx={{margin: "1em 0", color: 'text.primary'}} component="div" ><Typography variant="h2">Outfit Notes</Typography></ListSubheader>}
                >
                    <ListItem><Typography variant="h2">{outfit.notes}</Typography></ListItem>
                </List>
            }
            <Box>
            <Button href="/log" variant="contained" sx={{ textTransform: 'capitalize', margin: "1em 16px 0 16px"}}>Wear Again</Button>
            <Button href="" variant="contained" sx={{ textTransform: 'capitalize', margin: "1em 16px 0 16px"}}>Share <ShareIcon sx={{marginLeft: "5px"}} fontSize="small"/></Button>

            </Box>
            */}
        </Box>
    );
};

export { ItemDetailsPage };