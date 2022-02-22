import React from 'react';
import { useSelector } from 'react-redux';
import Table from '../Table/Table';
import ListGroup from 'react-bootstrap/ListGroup'
import style from './style.css'

function Home() {
  const name = useSelector((state) => state.checkSessionReducer.user);

  return (
    <>
      <div className="greeting">
        {typeof name.username === 'string' ? `Приветствуем Вас ${name.username}` : 'Авторизуйтесь для участия в игре'}
      </div>
      <h2 id="h2">Рекорды</h2>
      <div className="list">
        <ListGroup>
          <Table></Table>
        </ListGroup>
      </div>
    </>
  );

}

export default Home;
