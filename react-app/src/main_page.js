import React from 'react';
import useToken from './useToken';

import {
  Button,
  Box,
  Container,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
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

function ProfileEnable(classes) {
  const { token, setToken } = useToken();

  return (
    <>
      <Button
        type="submit"
        style={{ width: '200px' }}
        variant="contained"
        color="primary"
        className={classes.btn}
        href={"/profile"}
      >
        View Profile
      </Button>

      <Button
        type="submit"
        style={{ width: '200px' }}
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

export default function Page({ status }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // console.log(status);
  var profileButton = "";
  if (status) {
    profileButton = ProfileEnable(classes)
  }

  // console.log("Status");
  // console.log(status);

  return (
    <Box
      style={{
        backgroundImage: `url(${background})`,
        height: '95vh',
        width: '97vw',
        backgroundRepeat: 'repeat',
        backgroundPosition: "center",
        backgroundSize: "auto"
      }}
    >

      <Container
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Typography variant="h3" align="center">
          TIC TAC TOE
        </Typography>
        <Typography variant="h3" align="center">
          ONLINE
        </Typography>

        <div className={classes.paper}>
          <Button
            style={{ width: '200px' }}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.btn}
            href="#"

            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            {"Play Offline"}
            <ArrowDropDownIcon />
          </Button>


          <Button
            type="submit"
            style={{ width: '200px' }}
            variant="contained"
            color="primary"
            className={classes.btn}
            href="/game_online"
          >
            Play Online
              </Button>

          <Button
            type="submit"
            style={{ width: '200px' }}
            variant="contained"
            color="primary"
            className={classes.btn}
            href="/leaderboard"
          >
            Leaderboard
              </Button>

          {profileButton}

          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper style={{ width: '200px' }} alignItems='center'>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <Button href="/game" style={{ width: '200px', textTransform: 'none' }} onClick={handleClose}>Regular</Button>
                      <Button href="/game_rapid" style={{ width: '200px', textTransform: 'none' }} onClick={handleClose}>Rapid Fire</Button>
                      <Button href="/game_bo3" style={{ width: '200px', textTransform: 'none' }} onClick={handleClose}>Best of Three</Button>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

        </div>
      </Container>
    </Box>
  );
}