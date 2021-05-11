
import React from 'react';
import {useState}  from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './login_page.css';

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


export default function Login({setToken}) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");


  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("Testing");
    console.log("handling submit");
    const token = await loginUser({
      username,
      password
    });
    console.log(token);
    setToken(token);
  }

  return (
    <div className="Login">
        <h1>LOG IN</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
      <div className="child">
      <Button variant="contained" color="default" size='small' type="submit" disabled={!validateForm()}>
            Login
        </Button>
          <a href="/signup">Don't have an account? Sign up</a>
          {/* <a href="/reset">Forgot Password?</a> */}
      </div>
      </Form>
    </div>

  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}