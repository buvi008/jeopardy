const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();

const app = express();
const PORT = process.env.PORT ?? 4000;

const registerRouter = require('./routes/register');
const isAuthorizedRouter = require('./routes/isAuthorized');
const logoutRouter = require('./routes/logout');
const loginRouter = require('./routes/login');

const pointRouter = require('./routes/point');


const sessionConfig = {
  store: new FileStore(),
  key: 'user_sid',
  secret: `${process.env.SECRET_WORD}`,
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use('/register', registerRouter);
app.use('/isAuthorized', isAuthorizedRouter);
app.use('/logout', logoutRouter);
app.use('/login', loginRouter);
app.use('/game', require("./routes/game"))

app.use('/point', pointRouter);

app.listen(PORT, () => console.log(`*Server started at http://localhost:${PORT}`));
