import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    verticalAlign: 'middle'

  },
  btn: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Page()
{
  const classes = useStyles();

  return (

    <Container component="main" maxWidth="xs" justify="center" verticalAlign= "center">
      <CssBaseline />
      {/* <img src={tto} alt={"Tic Tac Toe Image"}/> */}
      <Typography component="h1" variant="h5" align="center">
      TIC TAC TOE ONLINE
      </Typography>
      
      <div className={classes.paper}>
          <Grid
          container
          justify= "center"
          >
            <Button
            type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.btn}
              href="/game"
            >
              Play Offline
            </Button>

            <Button
            type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.btn}
              href="/game_online"
            >
              Play Online
            </Button>

            <Button
            type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.btn}
              href="/login"
            >
              Log In
            </Button>
          </Grid>

      </div>
    </Container>
  );
}
