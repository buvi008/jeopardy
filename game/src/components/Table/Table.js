import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'
import style from "./style.css"

export default function Table() {

  //мой код Выведение списка результатов
  const [points, setPoints] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/isAuthorized').then((result) => setPoints(result.data.results));
  }, []);
  // console.log(points);

  const pointList = points.map((point) => (
    <>
      <ListGroup.Item className="row" variant="dark" key={point.id * 10000} >
        <div className="data" >{point.username}   {point.points}</div>
        {/* <div className="data">{point.points}</div> */}
      </ListGroup.Item>
    </>
  ));
  return pointList;
}
