import React from 'react';
import {useState}  from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './signup_page.css';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0 && username.length >0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <div className="Signup">
          <h1>SIGN UP</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>
        <Form.Group size="lg" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
                autoFocus
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <a href="/login">Already have an account? Log in</a>
        </div>
        </div>
  
    );
  }