const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const cors = require('cors');
const cookeeparser = require('cookie-parser');
const authroutes = require('./routes/authroute');
const feedbackroutes = require('./routes/feedbackroutes');
require('./config/passport_config')('app');

const CLIENT_END_POINT = 'http://localhost:1234';
const app = express();
const port = process.env.PORT || 4000;

const urlEncode = bodyparser.urlencoded({ extended: false });

app.use(bodyparser.json());
app.use(session({ secret: 'farmspired' }));
app.use(cookeeparser());

app.use('/auth', urlEncode, authroutes);
app.use('/feedback', feedbackroutes);

app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ');
}));

app.use(cors({
  origin: CLIENT_END_POINT, // allow to server to accept request from different origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  //credentials: true // allow session cookie from browser to pass through
}));



app.get('/', (req, res) => {
  res.redirect(CLIENT_END_POINT);
});

app.listen(port);
