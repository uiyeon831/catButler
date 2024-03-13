const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('req.body');
})

//정적인 파일을 불러올 수 있도록
app.use(express.static(path.join(__dirname, '../uploads')));

app.listen(port, () => {
  console.log(`
############################
#     Server is start!     #
############################`);
});