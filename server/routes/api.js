
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.route('/')
  .get((req, res) => {
    res.status(200).send('Hello World!');
  })
  .post((req, res) => {
    res.status(201).send({ data: 'Posted!' });
  });

module.exports = router;
