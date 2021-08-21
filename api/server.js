const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'bootcamptarget'
})

connection.connect((err) => {
    if(!err) {
        console.log('Мы подключились к БД');
    }
})

app.get('/user/:id', (request, response) => {
    console.log(request.params.id);

    connection.query('SELECT * FROM targets;', (err, data) => {
        if (err) {
            response.status(404).json('not found');
        }

        console.log(data);
        response.status(200).json(data);

    })
})

app.listen(3000, () => {
    console.log('Сервер запущен')
})