import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '../Container';
import CustomButton from '../CustomButton';
import classes from './HomeHero.module.css';

export default function HomeHero() {
  return (
    <section className={classes['hero-section']}>
      <Container>
        <Grid
          sx={{
            display: { xs: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: {
              xs: 0,
              lg: 12,
            },
            flexDirection: {
              xs: 'column-reverse',
              sm: 'row',
            },
            position: 'relative',
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              position: {
                xs: 'absolute',
                sm: 'relative',
              },
              top: '50%',
              transform: {
                xs: 'translateY(-30%)',
                sm: 'none',
              },
              textAlign: {
                xs: 'center',
                sm: 'left',
              },
              color: {
                xs: 'whitesmoke',
                sm: 'inherit',
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textTransform: 'uppercase' }}
            >
              new arrived
            </Typography>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 'bold', maxWidth: '450px' }}
            >
              Modern wearable cloth
            </Typography>
            <CustomButton>Shop Now</CustomButton>
          </Grid>
          <Grid item xs={12} lg={6} width={375} height={550}>
            <Image
              src="/hero-3.png"
              alt="hero"
              width={375}
              height={550}
              className="full"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
