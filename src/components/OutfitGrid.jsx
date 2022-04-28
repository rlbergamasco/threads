import { Grid } from '@mui/material';
import { OutfitCard } from 'components';

const OutfitGrid = ({ outfits }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
      {outfits.map((outfit, i) =>
      (<Grid item key={i} xs={6} >
        <OutfitCard imageURL={outfit.imageURL} date={outfit.date} />
      </Grid>))}
    </Grid>
  )
}

export { OutfitGrid };