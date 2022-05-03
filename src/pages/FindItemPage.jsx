import { useState } from 'react';
import { Typography, Box, Button, Fab, TextField, Link } from '@mui/material';
import { ItemGrid, FilterMenu, FindItemList } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems, selectOutfits, editOutfit } from "appSlice";
import { useNavigate } from "react-router-dom";

import { Search, Tune, Add } from '@mui/icons-material';
import { useParams, useLocation } from "react-router-dom";

const FindItemPage = ({setItems, outfitItems, setAddingItemsView}) => {
    const items = useSelector(selectItems);

    const handleAddItem = (event) => {
        
        let itemId = event.target.id;
        let newOutfitItem = {
            "imageRelativeY": 0.5,
            "imageRelativeX": 0.5,
            "itemId": itemId
        }

        setItems([...outfitItems, newOutfitItem]);
        setAddingItemsView(false);
        return
    }

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Find an Item</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link onClick={() => setAddingItemsView(false)} underline="none">Back</Link>
                </Box>
            </Box>

            <Box sx={{ mt: 7 }}>
                <TextField label="Search for item..." sx={{ width: '100%', my: 1 }} />
            </Box>

            <Box sx={{ mt: 3, mb: 5}}>
                <FindItemList handleAddItem={handleAddItem} display="List" items={items} />
            </Box>

            <Box sx={{ position: 'fixed', bottom: 70, left: 0, bgcolor: 'background.paper', width: '100vw', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button href="/logItem" variant="contained" sx={{ textTransform: 'capitalize', width: '90vw' }}>Create New Clothing Item</Button>
            </Box>
        </Box>
    );
};

export { FindItemPage };