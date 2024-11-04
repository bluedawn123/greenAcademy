const cors = require('cors')
const express = require('express')
const app = express()
const port = 8000

var corsOptions = {
  origin: '*',  //모든 출처 허용
}

app.use(cors(corsOptions));

const mysql      = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'react_bbs',
  password : '12345',
  database : 'react_bbs'
});

db.connect();

app.get('/', (req, res) => {
  const sql = "INSERT INTO requested (rowno) VALUES (1)"
  db.query(sql, (err, rows, fields) => {
    if (err) throw err;
    res.send('성공')
    console.log('데이터 추가성공');
  })
})

app.get('/list', (req, res) => {
  const sql = "SELECT * FROM board"
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//db.end();