import React from 'react';
import { Button } from 'react-bootstrap';
import GameModal from '../GameModal/GameModal';

function GameId({ el }) {
  const [modalShow, setModalShow] = React.useState(false);

  const onButton = (id) => {
    document.getElementById(`${id}`).innerText = '';
    document.getElementById(`${id}`).setAttribute('disabled', 'disabled');
  };

  return (
    <>
      <GameModal show={modalShow} onHide={() => setModalShow(false)} />
      {el.Questions.map((el2) => (
        <td key={el2.id * 100000}>
          <Button
            id={`${el2.id}`}
            style={{ backgroundColor: 'dark', width: '100px', height: '100px' }}
            variant="dark"
            onClick={() =>
              setModalShow({ get: true, idQ: el2.id, idT: el.id }) &
              onButton(el2.id)
            }
          >
            {el2.price}
          </Button>
        </td>
      ))}
    </>
  );
}

export default GameId;
