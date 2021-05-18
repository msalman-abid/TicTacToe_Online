import React from 'react';

import {
  Button,
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

import background from "./bkg-3.png";

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

function ProfileEnable(classes){
  return(
    <Button
      type="submit"
        style={{width:'200px'}}
        variant="contained"
        color="primary"
        className={classes.btn}
        href={"/profile"}
        // disabled={!status}
      >
        View Profile
      </Button>
  );
}

export default function Page({status})
{
  const classes = useStyles();
  console.log(status);
  var profileButton = "";
  if (status){
    profileButton = ProfileEnable(classes)
  }

  return (
      <Box
      style={{backgroundImage: `url(${background})`,
      height:'95vh',
      width:'97vw',
      backgroundRepeat: 'repeat',
      backgroundPosition: "center",
      backgroundSize: "auto"}}
      >

      <Container
      style={{
      position: 'absolute', 
      left: '50%', 
      top: '50%',
      transform: 'translate(-50%, -50%)'}}
      >
        <Typography variant="h3" align="center">
        TIC TAC TOE
        </Typography>
        <Typography variant="h3" align="center">
        ONLINE
        </Typography>
        
        <div className={classes.paper}>
              <Button
              style={{width:'200px'}}
              type="submit"
                variant="contained"
                color="primary"
                className={classes.btn}
                href="/game"
              >
                Play Offline
              </Button>

              <Button
              type="submit"
              style={{width:'200px'}}
                variant="contained"
                color="primary"
                className={classes.btn}
                href="/game_online"
              >
                Play Online
              </Button>

              <Button
              type="submit"
              style={{width:'200px'}}
                variant="contained"
                color="primary"
                className={classes.btn}
                href="/leaderboard"
              >
                Leaderboard
              </Button>
              {profileButton}

        </div>
      </Container>
      </Box>
  );
}