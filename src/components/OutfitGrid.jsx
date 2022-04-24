import { Grid } from '@mui/material';
import { OutfitCard } from 'components';

const OutfitGrid = ({ data }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }} sx={{ marginBottom: '3.5em' }}>
      {data.map((outfit, i) =>
      (<Grid item key={i} xs={6} >
        <OutfitCard imageURL={outfit.imageURL} date={outfit.date} />
      </Grid>))}
    </Grid>
  )
}

export { OutfitGrid };