const express = require('express')
const app = express()
const cors = require('cors')
var pg = require('pg');
var bodyParser = require('body-parser')

const config = {
    user: 'postgres',
    database: 'ited',
    password: 'postgres',
    port: 5432
};

const pool = new pg.Pool(config);

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/getusers', function (req, res) {
    console.log("Запрос получен");

    pool.connect(function (err, client, done) {

        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query('SELECT * FROM users', function (err, result) {
            done();
            if (err) {
                console.log(err);
                return res.status(400).send(err);
            }
            console.log(result.rows)
            return res.status(200).json({ response: result.rows });
        })
    })

})

app.post('/saveusers', function (req, res) {
    console.log(req.body)
    res.end()
})

app.listen(5000, console.log('Сервер успешно запущен на порту 5000'))