const express = require('express');
const morgan = require('morgan');
const path = require('path');
const views = require('./views');
const {db, Page, User} = require('./models');

const app = express();

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.get('/', (req, res) => {
  res.redirect("/wiki");
})

app.use('/wiki', require('./routes/wiki'));
app.use('/users', require('./routes/users'));


const init = async () => {
  await db.sync({force:true});
  await Page.sync();
  await User.sync();
  // make sure that you have a PORT constant
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();
