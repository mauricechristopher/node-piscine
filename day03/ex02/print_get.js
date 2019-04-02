const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log(req.query)
})

app.listen(8080);
//http://localhost:8080/?login=mmontinet
console.log("listening on 8080");
