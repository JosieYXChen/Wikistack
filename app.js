const express = require('express');
const morgan = require('morgan');
const path = require('path');
const views = require('./views');


const app = express();

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
  res.send(views.main());
})
app.use('/wiki', require('./routes/wiki'));
app.use('/users', require('./routes/users'));


app.listen(3000);
