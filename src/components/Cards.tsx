// Dependencies
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

import React from 'react';

// Material UI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// Portfolio & Components
import portfolio from '../data/portfolio';
import CardModal from '../components/CardModal';

// FontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

// Importing images

// Begin Application
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export default function Cards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>

          {portfolio.length ? (
            portfolio.map((portfolio) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                  <CardMedia
                      component="img"
                      alt={portfolio.projectName}

                      title={portfolio.projectName}
                      src={portfolio.imgSrc}
                    />
                    <CardContent>
                      {/* <Typography gutterBottom variant="h5" component="h2">
                        {portfolio.projectName} <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </Typography> */}
                      <CardModal {...portfolio} />
                    </CardContent>
                  {/* <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={portfolio.projectName}

                      title={portfolio.projectName}
                      src={portfolio.imgSrc}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {portfolio.projectName} <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </Typography>
                      <CardModal {...portfolio} />
                    </CardContent>
                  </CardActionArea> */}
                </Card>
              </Grid>
            ))
          ) : ('')

          }
        </Grid>
      </Container>

      <div>

      </div>

    </div>
  );
}