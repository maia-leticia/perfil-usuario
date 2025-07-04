const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})

db.connect((err)=>{
    if(err){
        console.error("Erro ao conectar ao banco")
        console.error(err)
    }
    else{
        console.log("Sucesso ao conectar ao banco")
    }
})

app.listen(3001, ()=>{
    console.log("Servidor rodando em http://localhost:3001")
})

app.get("/usuario", (req,res)=>{
    const sql = "SELECT * FROM perfil_usuario_db WHERE user_id = 1"

    db.query(sql, (err, results) =>{
        if(err){
            console.error("Erro ao buscar usuário", err)
            return res.status(500).json({erro: "Erro ao buscar usuário"})
        }
        res.json(results[0])
    })
})

