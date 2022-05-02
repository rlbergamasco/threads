import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { OutfitGrid, FilterMenu } from 'components';
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";
import { selectSort, selectDisplay, changeSort, changeDisplay, selectSelectedTags, changeSelectedTags } from "historySlice";
import { Search, Tune } from '@mui/icons-material';
import { historySortOptions } from 'sortOptions';

const HistoryPage = () => {
    const outfits = useSelector(selectOutfits);
    const [openMenu, setOpenMenu] = useState(false);
    const selectedSortOptionLabel = useSelector(selectSort);
    const display = useSelector(selectDisplay);
    const sortOptions = historySortOptions;

    const selectedSortOption = sortOptions.find((e) => e.label === selectedSortOptionLabel)
    const sorted = [...outfits].sort((a, b) => selectedSortOption.func(a, b, outfits))

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
                <OutfitGrid outfits={sorted} />
            </Box>

            <FilterMenu
                open={openMenu}
                setOpen={setOpenMenu}
                selectedSortOptionLabel={selectedSortOptionLabel}
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