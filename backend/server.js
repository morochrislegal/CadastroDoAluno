const express = require('express');
const mysql = require('mysql2')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
});


app.post("/salvar", (req, res) => {
    let nome = req.body.nome;
    let idade = req.body.idade;

    let sql = "INSERT INTO alunos (nome, idade) VALUES (?, ?);"
conexao.query(sql, [nome, idade], (erro, resultado) => {
        if(erro) {
            console.log(erro);
        } else {
            res.send("Alunos salvo com sucesso");
        }
    })
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});