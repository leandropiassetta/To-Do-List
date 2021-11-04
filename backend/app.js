const express = require('express');
// const cors = require('cors');
const app = express();
const port = 3000;
const routesToDo = require('./routes');

app.use(express.json());
// app.use(cors);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/tasks',routesToDo);

app.listen(port, () => console.log(`Server started listening ${port}!`));