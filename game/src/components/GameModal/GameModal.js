import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { PUT_POINT } from '../../redux/actionTypes/isAuthorized'
import Countdown from 'react-countdown';

function GameModal(props) {

  const { themes } = useSelector((state) => state.questReducer);

  const dispatch = useDispatch();

  let { count } = useSelector((state) => state.countReducer);

  const theme = themes.find((el) => el.id === props.show.idT);

  let title, question, questText, questPrice;

  if (theme) {
      title = theme.title;
      question = theme.Questions.find((el)=> el.id === props.show.idQ);
      if (question) {
          questText = question.text;
          questPrice = question.price
      }
  } else {
      title = "loading";
  }

  const addPoints = (event) => {
    props.onHide();

    count += Number(event.target.value);

    dispatch({ type: PUT_POINT, payload: count });

  }

  const removePoints = (event) => {
    props.onHide();

    count -= Number(event.target.value);

    dispatch({ type: PUT_POINT, payload: count });

  }

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      setTimeout(() => {
        props.onHide();
      }, 100);
      return <span></span>
    } else {
      return <span style={{color: 'red'}}>{seconds}</span>;
    }
  }; 

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title} <Countdown date={Date.now() + 15000} renderer={renderer} className="mx-5"/></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{questText}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" value={questPrice} onClick={removePoints}>Неврено</Button>
        <Button variant="dark" value={questPrice} onClick={addPoints} >Верно</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GameModal;
