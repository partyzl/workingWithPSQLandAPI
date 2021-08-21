const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors());

const userRoutes = require('./controller/user')

app.use('/users', userRoutes);

module.exports = app;