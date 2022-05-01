import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { OutfitGrid, FilterMenu } from 'components';
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";
import { selectSort, selectDisplay, changeSort, changeDisplay, selectSelectedTags, changeSelectedTags } from "historySlice";
import { Search, Tune } from '@mui/icons-material';

const HistoryPage = () => {
    const outfits = useSelector(selectOutfits);
    const [openMenu, setOpenMenu] = useState(false);
    const sort = useSelector(selectSort);
    const display = useSelector(selectDisplay);
    const sortOptions = ['Most Recently Worn', 'Least Recently Worn', 'Most Worn', 'Least Worn', 'Date Added: Most Recent', 'Date Added: Least Recent'];

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Outfit History</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search fontSize="large" />
                    <Tune fontSize="large" onClick={() => setOpenMenu(true)} />
                </Box>
            </Box>
            <Box sx={{ mt: 7 }}>
                <OutfitGrid outfits={outfits} />
            </Box>
            <FilterMenu
                open={openMenu}
                setOpen={setOpenMenu}
                sort={sort}
                changeSort={changeSort}
                sortOptions={sortOptions}
                display={display}
                changeDisplay={changeDisplay}
                selectSelectedTags={selectSelectedTags}
                changeSelectedTags={changeSelectedTags}
            />
        </Box>
    );
};

export { HistoryPage };