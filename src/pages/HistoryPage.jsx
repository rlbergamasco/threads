import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { OutfitGrid, FilterDrawer } from 'components';
import { useSelector } from 'react-redux';
import { selectOutfits, selectHistorySort, selectHistoryDisplay, changeHistorySort, changeHistoryDisplay } from "appSlice";
import { Search, Tune } from '@mui/icons-material';

const HistoryPage = () => {
    const outfits = useSelector(selectOutfits);
    const [openDrawer, setOpenDrawer] = useState(false);
    const sort = useSelector(selectHistorySort);
    const display = useSelector(selectHistoryDisplay);
    const sortOptions = ['Most Recently Worn', 'Least Recently Worn', 'Most Worn', 'Least Worn', 'Date Added: Most Recent', 'Date Added: Least Recent'];

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Outfit History</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search fontSize="large" />
                    <Tune fontSize="large" onClick={() => setOpenDrawer(true)} />
                </Box>
            </Box>
            <Box sx={{ mt: 7 }}>
                <OutfitGrid outfits={outfits} />
            </Box>
            <FilterDrawer
                open={openDrawer}
                setOpen={setOpenDrawer}
                sort={sort}
                changeSort={changeHistorySort}
                sortOptions={sortOptions}
                display={display}
                changeDisplay={changeHistoryDisplay}
            />
        </Box>
    );
};

export { HistoryPage };