import { Grid } from '@mui/material';
import { ItemCard } from 'components';

const ItemGrid = ({ items }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
      {items.map((item, i) =>
      (<Grid item key={i} xs={6} >
        <ItemCard item={item} />
      </Grid>))}
    </Grid>
  )
}

export { ItemGrid };