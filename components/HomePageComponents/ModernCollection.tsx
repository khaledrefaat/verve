import Container from '../Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ModernCollectionCard from './ModernCollectionCard';

export default function ModernCollection() {
  return (
    <section>
      <Container sx={{ marginY: '3rem' }}>
        <Box
          sx={{
            paddingX: {
              lg: '10rem',
              md: '5rem',
              xs: '0',
            },
          }}
        >
          <Box sx={{ marginBottom: '2rem' }}>
            <Typography variant="caption" sx={{ textTransform: 'uppercase' }}>
              save up to 40%
            </Typography>
            <Typography variant="h4">2024 Modern collection</Typography>
          </Box>
          <Grid container gap={5}>
            <Grid xs={12} sm={4}>
              <ModernCollectionCard
                imgSrc="/collection-1.png"
                alt="collection"
                mb={3}
                height={200}
              />
              <ModernCollectionCard
                imgSrc="/collection-6.png"
                alt="collection"
                height={200}
              />
            </Grid>
            <Grid xs={12} sm={7}>
              <ModernCollectionCard
                imgSrc="/collection-3.png"
                alt="collection"
                height={400 + 24}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
