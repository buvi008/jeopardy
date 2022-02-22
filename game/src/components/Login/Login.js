import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { CHECK_SESSION } from '../../redux/actionTypes/isAuthorized'

function Login(props) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const onSubmit = async (event) => {
    event.preventDefault();
    
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const responce = await fetch('http://localhost:4000/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await responce.json();

    if (data.login) {
      dispatch({ type: CHECK_SESSION, payload: { status: data.login, user: data.user }});
      navigate('/');
    } else {
      document.querySelector('#feedback').textContent = data.message;
      document.querySelector('#feedback').style.display = 'block';
    }

  }
  
  return (
    <Form className="container" onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Почта</Form.Label>
        <Form.Control type="email" placeholder="Введите почту" name="email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" minLength="8" placeholder="Введите пароль" name="password" required/>
      </Form.Group>
      <div id="feedback" className="invalid-feedback"></div>
      <br />
      <Button variant="dark" type="submit">
       Войти
      </Button>
    </Form>
  );
}

export default Login;
