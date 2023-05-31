const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const port = 3000;

// Configure Mysql
const db = mysql.createConnection({
  host     : 'br452.hostgator.com.br',
  user     : 'obreve59_galileu',
  password : '8LnxKpNgLkyA',
  database : 'obreve59_galileu'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Conectado ao bando de dados!');
})

app.use(cors());

//API Endpoint
app.get('/pokemons', (req, res) => {
    db.query('SELECT * FROM Pokemons', (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
                