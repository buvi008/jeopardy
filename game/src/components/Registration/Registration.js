import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { CHECK_SESSION } from '../../redux/actionTypes/isAuthorized'

function Registration(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    if (event.target.password.value !== event.target.passwordConfirm.value) {
      document.querySelector('#feedback').textContent = 'Пароли не совпадают';
      document.querySelector('#feedback').style.display = 'block';
      return false;
    }
    
    const body = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const responce = await fetch('http://localhost:4000/register', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await responce.json();

    if (data.registration) {
      dispatch({ type: CHECK_SESSION, payload: { status: data.registration, user: data.user }});
      navigate('/');
    } else {
      document.querySelector('#feedback').textContent = data.message;
      document.querySelector('#feedback').style.display = 'block';
    }

  }

  return (
    <Form className="container" onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Ваше имя</Form.Label>
        <Form.Control type="text" placeholder="Введите имя"  name="username" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Почта</Form.Label>
        <Form.Control type="email" placeholder="Введите почту" name="email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" minLength="8" placeholder="Введите пароль" name="password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
        <Form.Label>Повторите пароль</Form.Label>
        <Form.Control type="password" minLength="8" placeholder="Подтвердите пароль" name="passwordConfirm" required/>
      </Form.Group>
      <div id="feedback" className="invalid-feedback"></div>
      <br />
      <Button variant="dark" type="submit">
       Зарегистрироваться
      </Button>
    </Form>
  );
}

export default Registration;
