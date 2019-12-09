const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => { res.send('Server is running!') })

app.get('/characters', (req, res) => {
  // Rick and Morty API (Retrives all characters in Show)
  const ApiUrl = 'https://rickandmortyapi.com/api/character/';

  fetch(ApiUrl)
    .then(res => res.json())
    .then(data => {
      res.send({ data });
    })
    .catch(err => res.status(400).json('Error getting characters'))
  });

app.listen(3001, () => {
  console.log('app is running on port', 3001);
})
