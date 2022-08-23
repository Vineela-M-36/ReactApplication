import React from 'react';
import { Typography,Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import useStyles from './styles.js';

const cards = [1,2,3,4,5,6,7,8,9]

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h6">PhotoAlbum</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              PhotoAlbum
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello everyone and this is a photo album. You are now connected to the album. I am trying to make a long one.
            </Typography>
            <div className={classes.buttons} >
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  See my photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid>
            </Grid>
            </div>
            
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
          {cards.map(() => (
            <Grid item>
              <Card className={classes.card}>
                <CardMedia 
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography  gutterBottom variant="h5">
                  Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use it for showing your cards. 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color='primary'>VIEW</Button>
                  <Button size="sm" color='primary'>EDIT</Button>
                </CardActions>
              </Card>
            </Grid>
          ))};
          
          </Grid>
        </Container> 

      </main>
    </>
  )}

export default App;

