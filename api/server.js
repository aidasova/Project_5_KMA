const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345',
    database: 'bootcamptarget'
})

connection.connect((err) => {
    if(!err) {
        console.log('Мы подключились к БД');
    }
})

app.get('/purpose/all', (request, response) => {
    
    connection.query('SELECT * FROM targets;', (err, data) => {
        if (err) {
            response.status(404).json('not found');
        }

        // разрешаем принимать запросы с любых адресов
        response.setHeader('Access-Control-Allow-Origin', "*");
        response.status(200).json(data);
    })
})

app.listen(3010, () => {
    console.log('Сервер запущен')
})