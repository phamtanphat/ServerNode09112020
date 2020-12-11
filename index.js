const express = require('express')
const app = express()
 
// app.get('/:a/:b', function (req, res) {
//   const {a , b} = req.params
//   console.log(a , b)
// })

app.get('/', function (req, res) {
    const a = req.query.a
    const b = req.query.b
    console.log(a , b)
})
 
app.listen(3000)