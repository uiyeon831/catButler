const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('연결 완료');
  })
  .catch(err => {
    console.error(err);
  })

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