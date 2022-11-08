const express = require('express');

const bodyParser = require('body-parser');

const routes = require('./routers');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(routes);

const HTTP_OK_STATUS = 200;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

const PORT = '3000';

app.listen(PORT, () => {
  console.log('Online');
});
