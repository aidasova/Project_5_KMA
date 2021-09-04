const express = require('express');
const app = express();
const mysql = require('mysql');
<<<<<<< HEAD
let cors = require('cors');
let config = require('../src/config/config')

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
=======
const config = require("../src/config/config")
const cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

>>>>>>> origin/put_server_EditPage

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
    
    const {nameTarget, requiredAmount, targetTerm, startingAmount, depositInterest, taskResult} = request.body;
<<<<<<< HEAD
    console.log(request.body)
    console.log( `INSERT INTO targets (nameTarget, requiredAmount, targetTerm, startingAmount, depositInterest, taskResult)
    VALUES ('${nameTarget}', ${requiredAmount}, ${targetTerm}, ${startingAmount}, ${depositInterest}, ${taskResult})`)
   
    connection.query(`
        INSERT INTO targets (nameTarget, requiredAmount, targetTerm, startingAmount, depositInterest, taskResult)
        VALUES ('${nameTarget}', ${requiredAmount}, ${targetTerm}, ${startingAmount}, ${depositInterest}, ${taskResult});
        `, (err, data) => {
        if(err) {
            response.status(404).json('not found');
            return;
        }
        response.setHeader('Access-Control-Allow-Origin', "*");
        response.status(200).json(data);
    })
})
app.delete(`/purpose/delete/:id`, (request, response) => {
    console.log(request)
   console.log(`DELETE FROM targets WHERE id = ${request.params.id}'
   `)
    console.log(request.body)
    connection.query(`DELETE FROM targets WHERE id = ${request.params.id}
    `, (err, data) => {
        if(err) {
            response.status(404).json('not found');
=======
    console.log(`
    INSERT INTO targets (nameTarget, requiredAmount, targetTerm, startingAmount, depositInterest, taskResult)
    VALUES ('${nameTarget}', ${requiredAmount}, ${targetTerm}, ${startingAmount}, ${depositInterest}, ${taskResult});
    `)
    connection.query(`
        INSERT INTO targets (nameTarget, requiredAmount, targetTerm, startingAmount, depositInterest, taskResult)
        VALUES ('${nameTarget}', ${requiredAmount}, ${targetTerm}, ${startingAmount}, ${depositInterest}, ${taskResult});
        `, 
    (err, data) => {
        if(err) {
            response.status(401).json('not add')
>>>>>>> origin/put_server_EditPage
            return;
        }
        response.setHeader('Access-Control-Allow-Origin', "*");
        response.status(200).json(data);
    })
})
<<<<<<< HEAD
=======

>>>>>>> origin/put_server_EditPage
app.put('/purpose/editpage/:id', (request, response) => {
    const {nameTarget, requiredAmount, targetTerm, startingAmount, depositInterest, taskResult} = request.body;
    console.log(request.body)
    connection.query(`
        UPDATE targets 
        SET
            nameTarget = '${nameTarget}',
            requiredAmount = ${requiredAmount},
            targetTerm = ${targetTerm},
            startingAmount = ${startingAmount},
            depositInterest = ${depositInterest},
            taskResult = ${taskResult}
        WHERE id = ${request.params.id}
        ;`, 
    (err, data) => {
        if(err) {
            response.status(401).status('Не получилось обновить')
            return
        }
        response.status(200).json(data);
    })

})

app.listen(3010, () => {
    console.log('Сервер запущен')
})