import { useState } from 'react';
import { Typography, Box, TextField, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { OutfitGrid, FilterMenu, SearchBar } from 'components';
import { useSelector } from 'react-redux';
import { selectOutfits, selectItems, selectTags } from "appSlice";
import { selectSort, selectDisplay, changeSort, changeDisplay, selectSelectedTags, changeSelectedTags } from "historySlice";
import { Search, Tune } from '@mui/icons-material';
import { historySortOptions } from 'sortOptions';
import { historyFilterLogic } from 'filterOptions';

const HistoryPage = () => {
    const outfits = useSelector(selectOutfits);
    const display = useSelector(selectDisplay);
    const selectedTags = useSelector(selectSelectedTags);
    const allClothingItems = useSelector(selectItems);
    const allTags = useSelector(selectTags);
    const selectedSortOptionLabel = useSelector(selectSort);

    const [openMenu, setOpenMenu] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearchField, setShowSearchField] = useState(false);

    const sortOptions = historySortOptions;
    const selectedSortOption = sortOptions.find((e) => e.label === selectedSortOptionLabel)
    const sorted = [...outfits].sort((a, b) => selectedSortOption.func(a, b, outfits))

    const filtered = sorted.filter(outfit => historyFilterLogic(outfit, allClothingItems, selectedTags, allTags, searchTerm));

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Outfit History</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search fontSize="large" onClick={() => setShowSearchField(!showSearchField)} />
                    <Tune fontSize="large" onClick={() => setOpenMenu(true)} />
                </Box>
                {showSearchField ? <TextField value={searchTerm} onChange={e => setSearchTerm(e.target.value)} label="Search" sx={{ width: '90vw', mx: 3 }} /> : null}
            </Box>

            <Box sx={{ mt: showSearchField ? 15 : 7 }}>
                <OutfitGrid display={display} outfits={filtered} />
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