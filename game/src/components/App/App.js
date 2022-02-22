import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CHECK_SESSION } from '../../redux/actionTypes/isAuthorized';
import Game from "../Game/Game";
import Profile from '../Profile/Profile';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:4000/isAuthorized', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.isAuthorized) {
          dispatch({
            type: CHECK_SESSION,
            payload: { status: data.isAuthorized, user: data.user},
          });
        }
      });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="game" element={<Game />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
