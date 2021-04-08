
import React from 'react';
import {useState}  from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './login_page.css';

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
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
      </Form>
      <div class="child">
      <Button variant="contained" color="default" size='small' type="submit" disabled={!validateForm()}>
            Login
        </Button>
          <a href="/signup">Don't have an account? Sign up</a>
          {/* <a href="/reset">Forgot Password?</a> */}
      </div>
    </div>

  );
}
