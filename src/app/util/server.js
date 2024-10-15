const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configurar CORS y body-parser
app.use(cors());
app.use(bodyParser.json());

// Conectar a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost:9090',
  user: 'root',
  password: 'LUCHITo15@', 
  database: 'emazon'
});

db.connect(err => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para crear una nueva categoría
app.post('/categories', (req, res) => {
  const { name } = req.body;
  
  if (!name || name.length > 50) {
    return res.status(400).json({ error: 'El nombre es obligatorio y no puede tener más de 50 caracteres.' });
  }

  const query = 'INSERT INTO categories (name) VALUES (?)';
  db.query(query, [name], (error, results) => {
    if (error) {
      console.error('Error al crear la categoría:', error);
      return res.status(500).json({ error: 'Error al crear la categoría' });
    }

    res.status(201).json({ message: 'Categoría creada con éxito', categoryId: results.insertId });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:9090`);
});