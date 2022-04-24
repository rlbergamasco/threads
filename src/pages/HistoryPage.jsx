import { Typography, Container } from '@mui/material';
import OutfitGrid from '../components/OutfitGrid';
// import { useSelector } from 'react-redux';
// import { selectOutfits } from "appSlice";
import Outfits from "../data/outfits.json";


const HistoryPage = (props) => {
    
    return (
        <Container maxWidth="sm">
            <Typography variant="h1" sx={{marginBottom: '.5em'}}>Outfit History</Typography>
            <OutfitGrid data={Outfits} />
        </Container>
        
    );
};

export { HistoryPage };