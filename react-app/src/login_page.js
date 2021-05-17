import React from 'react';
import {useState}  from "react";
import PropTypes from 'prop-types';
import {
  Grid,
  Link,
  Container,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  Box,
  makeStyles
} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    verticalAlign: 'middle'

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    verticalAlign: 'middle'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

async function loginUser(credentials) {
  return fetch('http://localhost:9000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({credentials
    })
  }).then(data => data.json())
}


export default function LogIn({setToken}) {

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");


  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    console.log(token);
    setToken(token);
  }

  const classes = useStyles();

  return (
    <Box
    sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
    <Button  variant="contained" color="default" size='large' href="/"> Main Page </Button>
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            color="white"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!validateForm()}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </Box>
  );
}

LogIn.propTypes = {
  setToken: PropTypes.func.isRequired
}