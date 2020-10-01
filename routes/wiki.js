const express = require('express');
const router = express.Router();
const views = require('../views')

router.get('/', (req, res) => {
  res.send(views.wikiPage());
})

router.get('/add', (req, res) => {
  res.send(views.addPage());
})

module.exports = router;
