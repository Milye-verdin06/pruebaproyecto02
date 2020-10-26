require('dotenv').config();


const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors({
    origin: true
}));
app.use(express.json());

//rutas
app.use('/api/alumnos', require('./routes/alumnos'));

app.listen(process.env.PORT);