import { useState } from 'react';
import { Typography, Box, Button, Fab, bottomNavigationActionClasses } from '@mui/material';
import { ItemGrid, FilterMenu } from 'components';
import { useSelector } from 'react-redux';
import { selectItems, selectOutfits } from "appSlice";
import { selectSort, selectDisplay, changeSort, changeDisplay, selectSelectedTags, changeSelectedTags } from "closetSlice";
import { Search, Tune, Add } from '@mui/icons-material';
import { closetSortOptions } from 'sortOptions';

const ClosetPage = () => {
    const items = useSelector(selectItems);
    const outfits = useSelector(selectOutfits);

    const [openMenu, setOpenMenu] = useState(false);
    const selectedSortOptionLabel = useSelector(selectSort);
    const display = useSelector(selectDisplay);

    const sortOptions = closetSortOptions;

    const selectedSortOption = sortOptions.find((e) => e.label === selectedSortOptionLabel)
    const sorted = [...items].sort((a, b) => selectedSortOption.func(a, b, outfits))

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Closet</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search fontSize="large" />
                    <Tune fontSize="large" onClick={() => setOpenMenu(true)} />
                </Box>
            </Box>

            <Box sx={{ mt: 7 }}>
                <ItemGrid items={sorted} />
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
            <Fab color="primary"
                aria-label="add"
                href="/logItem"
                sx={{
                    margin: 0,
                    top: 'auto',
                    right: 20,
                    bottom: 102,
                    left: 'auto',
                    position: 'fixed',
                }}
            >
                <Add fontSize='large' />
            </Fab>
        </Box>
    );
};

export { ClosetPage };
