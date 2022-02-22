import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionQuest from '../../redux/action/quest';
import axios from 'axios';
import GameId from '../GameId/GameId';
import { Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Game = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { themes } = useSelector((state) => state.questReducer);

  const { count } = useSelector((state) => state.countReducer);

  const onInitQuest = async () => {
    dispatch(actionQuest.initQuestLoading());
    try {
      const { data } = await axios.get('http://localhost:4000/game/', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      const modifiedData = data.map((theme) => {
        theme.Questions = theme.Questions.map((question) => {
          question.active = true;
          return question;
        });
        return theme;
      });
      dispatch(actionQuest.initQuestSuccess(modifiedData));
    } catch (e) {
      dispatch(actionQuest.initQuestError(e));
    }
  };

  useEffect(() => {
    onInitQuest();
  }, []);

  const onClick = async (event) => {
    event.preventDefault();
    
    const responce = await fetch('http://localhost:4000/point', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ data: event.target.attributes.value.nodeValue })
    })

    const data = await responce.json();
    
    if(data.create) {
      navigate('/');
    }
  }

  return (
    <>
      <div style={{ display: 'flex'}}>
          <Card className="mx-5 card text-center" style={{ width: '18rem'}} border="light" variant="dark" text="dark" >
            <Card.Body>
              <Card.Title>Счет</Card.Title>
              <Card.Text>
                    {count}
              </Card.Text>
              <Card.Link value={count} onClick={onClick} style={{ color: 'black' }}>Закончить игру</Card.Link>
            </Card.Body>
          </Card>
          <div className="container">
          <div>
            <table>
              {themes.map((el) => (
                <tbody key={el.id * 10000000}>
                  <tr>
                    <td
                      style={{
                        backgroundColor: 'red',
                        width: '200px',
                        height: '100px',
                      }}
                      className="btn"
                    >
                      <font size="4" color="white" face="Arial">
                        {el.title}
                      </font>
                    </td>
                    {<GameId key={el.id * 1000} el={el} />}
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
