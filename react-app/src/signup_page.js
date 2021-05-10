import React from 'react';
import {useState}  from "react";
import PropTypes from 'prop-types';


import {
  Button,
  Box,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp( {setToken} ) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    async function signupUser(credentials) {
      return fetch('http://localhost:9000/login/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({credentials
        })
      }).then(data => data.json())
    }

    function validateForm() {
      return password.length > 0 && username.length >0;
      // return email.length > 0 && password.length > 0 && username.length >0;
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const token = await signupUser({
        username,
        password
      });
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
  
    <Button>
      Main Page
    </Button>
    
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="uname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                autoFocus
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!validateForm()}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-start">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </Box>
  );
}

SignUp.propTypes = {
  setToken: PropTypes.func.isRequired
}