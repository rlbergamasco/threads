import { useState } from 'react';
import { Typography, Box, Button, Fab, TextField, bottomNavigationActionClasses } from '@mui/material';
import { ItemGrid, FilterMenu } from 'components';
import { useSelector } from 'react-redux';
import { selectItems, selectOutfits, selectTags } from "appSlice";
import { selectSort, selectDisplay, changeSort, changeDisplay, selectSelectedTags, changeSelectedTags } from "closetSlice";
import { Search, Tune, Add } from '@mui/icons-material';
import { closetSortOptions } from 'sortOptions';
import { closetFilterLogic } from 'filterOptions';

const ClosetPage = () => {
    const items = useSelector(selectItems);
    const outfits = useSelector(selectOutfits);
    const allTags = useSelector(selectTags);

    const [openMenu, setOpenMenu] = useState(false);
    const [search, setSearch] = useState(false);

    const display = useSelector(selectDisplay);
    const selectedTags = useSelector(selectSelectedTags);
    const selectedSortOptionLabel = useSelector(selectSort);

    const sortOptions = closetSortOptions;

    const selectedSortOption = sortOptions.find((e) => e.label === selectedSortOptionLabel)
    const sorted = [...items].sort((a, b) => selectedSortOption.func(a, b, outfits))

    const filtered = sorted.filter((item) => closetFilterLogic(item, selectedTags, allTags));

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Closet</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search fontSize="large" onClick={() => setSearch(!search)} />
                    <Tune fontSize="large" onClick={() => setOpenMenu(true)} />
                </Box>
                {search ? <TextField label="Search" sx={{ width: '90vw', mx: 3 }} /> : null}
            </Box>

            <Box sx={{ mt: search ? 15 : 7 }}>
                <ItemGrid display={display} items={filtered} />
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
