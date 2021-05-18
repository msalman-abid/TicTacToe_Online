import React from 'react';
import useToken from './useToken';

import {
  Button,
  Box,
  Container,
  ClickAwayListener,
  Grid,
  Hidden,
  Paper,
  MenuList,
  Typography,
  makeStyles
} from '@material-ui/core';

import background from "./bkg-3.png";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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
  const { token, setToken } = useToken();
  
  return(
    <>
    <Button
      type="submit"
        style={{width:'200px'}}
        variant="contained"
        color="primary"
        className={classes.btn}
        href={"/profile"}
      >
        View Profile
      </Button>

      <Button
      type="submit"
        style={{width:'200px'}}
        variant="outlined"
        color="primary"
        className={classes.btn}
        href={"/"}
        onClick={() => setToken(null)}
      >
        Sign Out
      </Button>
      
    </>
  );
}

export default function Page({status})
{
  const classes = useStyles();

  const [secretIsVisible, setSecretIsVisible] = React.useState(false);

  const hideSecret = () => {
    setSecretIsVisible(false);
  };

  const showSecret = () => {
    setSecretIsVisible(true);
  };

  console.log(status);
  var profileButton = "";
  if (status){
    profileButton = ProfileEnable(classes)
  }

  console.log("Status");
  console.log(status);

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
        
        <Grid Container className={classes.paper}>
                <Grid item>
              <Button
              style={{width:'200px'}}
              type="submit"
                variant="contained"
                color="primary"
                className={classes.btn}
                href="#"
                onClick={showSecret}
              >
                {"Play Offline"}
                <ArrowDropDownIcon/>
              </Button>
              </Grid>

              <Hidden xsUp={!secretIsVisible}>
                <Grid item>
                    <Paper style={{width:'200px'}} alignItems='center'>
                      <ClickAwayListener onClickAway={hideSecret}>
                        <MenuList>
                          <Button href = "/game" style={{width: '200px', textTransform: 'none'}} onClick={hideSecret}>Regular</Button>
                          <Button href="/game_rapid" style={{width: '200px', textTransform: 'none'}} onClick={hideSecret}>Rapid Fire</Button>
                          <Button href="/game_bo3" style={{width: '200px', textTransform: 'none'}} onClick={hideSecret}>Best of Three</Button>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                    </Grid>
              </Hidden>

              <Grid item>
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
              </Grid>

              <Grid item>
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
              </Grid>

              <Grid item>
              {profileButton}
              </Grid>

        </Grid>
      </Container>
      </Box>
  );
}