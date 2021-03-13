const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const routes = require('./routes');
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


app.use(cors({ origin: '*' }));

app.use('/', routes);



module.exports = app;
