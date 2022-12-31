const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(5000, console.log('Сервер успешно запущен на порту 5000'))