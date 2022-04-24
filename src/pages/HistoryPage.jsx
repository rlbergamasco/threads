import { Typography, Box } from '@mui/material';
import { OutfitGrid } from 'components';
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";

const HistoryPage = () => {
    const outfits = useSelector(selectOutfits);
    console.log(outfits)
    return (
        <Box>
            <Typography variant="h1" sx={{ marginBottom: '.5em' }}>Outfit History</Typography>
            <OutfitGrid data={outfits} />
        </Box>

    );
};

export { HistoryPage };