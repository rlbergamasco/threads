import { Grid } from '@mui/material';
import OutfitCard from './OutfitCard';

export default function OutfitGrid(props) {
    let data = props.data
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginBottom: '3.5em'}}>
        {data.map((outfit) => 
        (<Grid item xs={6} >
            <OutfitCard imageURL={outfit.imageURL} date={outfit.date}/>
        </Grid>))}
    </Grid>
  )
}
