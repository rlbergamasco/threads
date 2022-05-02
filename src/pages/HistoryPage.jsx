import { useState } from 'react';
import { Typography, Box, TextField, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { OutfitGrid, FilterMenu, SearchBar } from 'components';
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";
import { selectSort, selectDisplay, changeSort, changeDisplay, selectSelectedTags, changeSelectedTags } from "historySlice";
import { Search, Tune } from '@mui/icons-material';

const HistoryPage = () => {
    const outfits = useSelector(selectOutfits);
    const [openMenu, setOpenMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const sort = useSelector(selectSort);
    const display = useSelector(selectDisplay);
    const sortOptions = ['Most Recently Worn', 'Least Recently Worn', 'Most Worn', 'Least Worn', 'Date Added: Most Recent', 'Date Added: Least Recent'];
    const selectedTags = useSelector(selectSelectedTags);

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Outfit History</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search fontSize="large" onClick={() => setSearch(!search)} />
                    <Tune fontSize="large" onClick={() => setOpenMenu(true)} />
                </Box>
                {search?<TextField label="Search" sx={{ width: '90vw', mx: 3}} />: null}
            </Box>

            <Box sx={{ mt: search?15:7 }}>
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
                selectedTags={selectedTags}
                changeSelectedTags={changeSelectedTags}
            />
        </Box>
    );
};

export { HistoryPage };