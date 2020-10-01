const express = require('express');
const router = express.Router();
const views = require('../views')
const {Page} = require("../models");

router.get('/', (req, res) => {
  res.send(views.main());
})



router.post('/', async (req,res,next)=>{
  const title = req.body.title[2];
  console.log("Title is ", title);
  const content = req.body.title[3];
  console.log("Console is ",content);

  try{
    const page = await Page.create({
      title,
      content,
    });
    res.redirect('/');

  }catch(error){next(error)}
})

router.get('/add', (req, res) => {
  res.send(views.addPage());
})

module.exports = router;




