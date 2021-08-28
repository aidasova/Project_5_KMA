const express = require('express');
const app = express();
const mysql = require('mysql');
const config = require("../src/config/config")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
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

app.post('/purpose/add', (request, response) => {
    
    const {id, nameTarget, requiredAmount, targetTerm, startingAmount, depositInterest, taskResult} = request.body;
    
    connection.query(`
        INSERT INTO targets (nameTarget, requiredAmount, targetTerm, startingAmount, depositInterest, taskResult)
        VALUES ('${nameTarget}', ${requiredAmount}, ${targetTerm}, ${startingAmount}, ${depositInterest}, ${taskResult});
        `, 
    (err, data) => {
        if(err) {
            response.status(401).json('not add')
            return;
        }
        response.setHeader('Access-Control-Allow-Origin', "*");
        response.status(200).json(data);
    })
})

app.put('/purpose/EditPage/:id', (request, response) => {
    const {nameTarget, requiredAmount, targetTerm, startingAmount, depositInterest, taskResult} = request.body;

    connection.query(`UPDATE targets SET (nameTarget, requiredAmount, targetTerm, startingAmount, depositInterest, taskResult)
    VALUES ('${nameTarget}', ${requiredAmount}, ${targetTerm}, ${startingAmount}, ${depositInterest}, ${taskResult});`, 
    (err, data) => {
        if(err) {
            response.status(401).status('Не получилось обновить')
            return
        }
        response.setHeader('Access-Control-Allow-Origin', "*");
        response.status(200).json(data);
    })

})

app.listen(3010, () => {
    console.log('Сервер запущен')
})