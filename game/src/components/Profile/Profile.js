import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelector,  useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProfilePoint from '../ProfilePoint/ProfilePoint';
import { GET_POINT } from '../../redux/actionTypes/isAuthorized';
import { useEffect } from 'react';

function Profile(props) {
  const user = useSelector((state) => state.checkSessionReducer.user);

  const points = useSelector((state) => state.getPointsReducer.points);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/point', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_POINT, payload: data }))
      }, [dispatch]);

  return (
    <div className="container">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Имя: {user.username}</Card.Title>
          <Card.Title>Почта: {user.email}</Card.Title>
          {points.length ? points.map(el => <ProfilePoint key={el.id} el={el} />) : 'Вы еще не играли!'}
          <Button variant="dark" onClick={() => navigate('/')}>
            На главную
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
