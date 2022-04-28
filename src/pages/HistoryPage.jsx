import { Typography, Box } from '@mui/material';
import { OutfitGrid } from 'components';
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";
import { Search, Tune } from '@mui/icons-material';

const HistoryPage = () => {
    const outfits = useSelector(selectOutfits);
    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Outfit History</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search fontSize="large" />
                    <Tune fontSize="large" />
                </Box>
            </Box>
            <Box sx={{ mt: 7 }}>
                <OutfitGrid outfits={outfits} />
            </Box>
        </Box>
    );
};

export { HistoryPage };