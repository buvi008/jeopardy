import React from 'react';
import { Card } from 'react-bootstrap';

function ProfilePoint({ el }) {

  return (
     <Card.Text>Дата: {el.createdAt.toString().slice(0, 10).replace('T', ' ')} <br/> Очки: {el.points} </Card.Text>
  );
}

export default ProfilePoint;
