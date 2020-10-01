const express = require('express');
const router = express.Router();
const views = require('../views')

router.get('/', (req, res) => {
  res.send(views.userList());
})

module.exports = router;
