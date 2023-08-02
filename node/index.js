const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('sync-mysql')

var ret = '';

app.get('/', (req, res) => {
    ret = '<h1>Full Cycle Rocks!</h1></br>' 
    ret += '<h2>Lista de nomes no banco de dados:</h2>'
     
    InserirNome(`Registro inserido (` + RetornaDataHoraAtual() + `)`);
    ConsultarNomes()
    
    res.send(ret);
})

app.listen(port, () => {
    console.log('Escutando porta desenv: ' + port )
})

//Insere registro na tabela people
function InserirNome(nome){
    var connection = new mysql(config)

    const sql = `INSERT INTO people(name) values('` +  nome + `')`
    console.log(sql);
    connection.query(sql)
}

//Realiza consulta da tabela people
function ConsultarNomes(){
    const sql = `SELECT name FROM people`
    var connection = new mysql(config)

    var lista = connection.query(sql)
    
    lista.forEach(element => {
       ret += element.name + '</br>'
    });
}

function RetornaDataHoraAtual(){
    const now = new Date();

    const year = now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const day = ("0" + now.getDate()).slice(-2);

    const hour = ("0" + now.getHours()).slice(-2);
    const minute = ("0" + now.getMinutes()).slice(-2);
    const second = ("0" + now.getSeconds()).slice(-2);

    // YYYY-MM-DD hh:mm:ss
    const formatted = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    return formatted;
}