const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const sha256 = require('sha256'); //encriptar senha

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let port = process.env.port || 3000;

// console.log(sha256('abc123'));

const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost', // O host do banco. Ex: localhost
    user: 'root', // Um usuário do banco. Ex: user 
    password: '', // A senha do usuário. Ex: user123
    database: 'db_extcomp' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
});

app.post('/login', async(req,res) => {
    con.query('SELECT * FROM associado', (err, rows) => {
        if (err) throw err
    
        console.log(rows[0].senha_hash, '\n\n')
    })
    // req.body.emailUser;
});


app.listen(port, (req,res) => {
    console.log('Servidor rodando');
});


// router.get('/', function(req,res){
//     res.sendFile(path.join(__dirname+'/../Front/index.html'))
// });
// app.use('/',router);



// con.end((err) => {
//     if(err) {
//         console.log('Erro to finish connection...', err)
//         return 
//     }
//     console.log('The connection was finish...')
// })
