import { useState } from 'react';
import { Typography, Box, TextField, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { OutfitGrid, FilterMenu, SearchBar } from 'components';
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";
import { selectSort, selectDisplay, changeSort, changeDisplay, selectSelectedTags, changeSelectedTags } from "historySlice";
import { Search, Tune } from '@mui/icons-material';
import { historySortOptions } from 'sortOptions';

const HistoryPage = () => {
    const outfits = useSelector(selectOutfits);
    const display = useSelector(selectDisplay);
    const selectedTags = useSelector(selectSelectedTags);
    const selectedSortOptionLabel = useSelector(selectSort);

    const [openMenu, setOpenMenu] = useState(false);
    const [search, setSearch] = useState(false);

    const sortOptions = historySortOptions;
    const selectedSortOption = sortOptions.find((e) => e.label === selectedSortOptionLabel)
    const sorted = [...outfits].sort((a, b) => selectedSortOption.func(a, b, outfits))

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Outfit History</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search fontSize="large" onClick={() => setSearch(!search)} />
                    <Tune fontSize="large" onClick={() => setOpenMenu(true)} />
                </Box>
                {search ? <TextField label="Search" sx={{ width: '90vw', mx: 3 }} /> : null}
            </Box>

            <Box sx={{ mt: search ? 15 : 7 }}>
                <OutfitGrid display={display} outfits={sorted} />
            </Box>
            <FilterMenu
                open={openMenu}
                setOpen={setOpenMenu}
                selectedSortOptionLabel={selectedSortOptionLabel}
                changeSort={changeSort}
                sortOptions={sortOptions}
                display={display}
                changeDisplay={changeDisplay}
                selectedTags={selectedTags}
                changeSelectedTags={changeSelectedTags}
            />
        </Box >
    );
};

export { HistoryPage };