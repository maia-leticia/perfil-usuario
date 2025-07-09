const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});

app.get("/usuario", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM perfil_usuario_db WHERE user_id = 1");
    res.json(rows[0]);
  } catch (err) {
    console.error("Erro ao buscar usuário", err);
    res.status(500).json({ erro: "Erro ao buscar usuário" });
  }
});

app.post("/usuario", async (req, res) => {
  const {
    user_name,
    user_age,
    user_street,
    user_neighborhood,
    user_city,
    user_bio,
    user_photo_url,
  } = req.body;

  const sql = `
    UPDATE perfil_usuario_db
    SET
      user_name=?,
      user_age=?,
      user_street=?,
      user_neighborhood=?,
      user_city=?,
      user_photo_url=?,
      user_bio=?
    WHERE user_id = 1
  `;

  const values = [
    user_name,
    user_age,
    user_street,
    user_neighborhood,
    user_city,
    user_photo_url,
    user_bio,
  ];

  try {
    await pool.query(sql, values);
    res.json({ mensagem: "Dados atualizados com sucesso!" });
  } catch (err) {
    console.error("Erro ao atualizar o banco de dados!", err);
    res.status(500).json({ erro: "Erro ao atualizar dados" });
  }
});
