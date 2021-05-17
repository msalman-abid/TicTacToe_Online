import React from 'react';

import {
  Avatar,
  Button,
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  IconButton
} from '@material-ui/core';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import TrendingFlatOutlinedIcon from '@material-ui/icons/TrendingFlatOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import CropDinOutlinedIcon from '@material-ui/icons/CropDinOutlined';

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
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function Logged_IN_Page()
{
  const classes = useStyles();

  return (
      <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
      >
      <Typography variant="h5" align="center">
        TIC TAC TOE ONLINE
      </Typography>
      
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <IconButton
        href="/profile"
        >
        <Avatar
          className={classes.large}
        />
        </IconButton>

        <Grid>
          <IconButton href="/leaderboard" className={classes.small}>
            <StarsOutlinedIcon/>
          </IconButton>
          <IconButton href="/" className={classes.small}>
            {/* <MoreVertOutlinedIcon/> */}
            {/* <CropDinOutlinedIcon/> */}
            <TrendingFlatOutlinedIcon/>
          </IconButton>
        </Grid>
      </Grid>
      <Container maxWidth="xs">
        
        <div className={classes.paper}>
              <Button
              fullWidth
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
                fullWidth
                variant="contained"
                color="primary"
                className={classes.btn}
                href="/game_online"
              >
                Play Online
              </Button>

        </div>
      </Container>
      </Box>
  );
}
