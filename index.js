const express = require('express');
const app = express();
const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

// Middleware de body parser
app.use(express.json());

moviesApi(app);

app.listen(config.port, function() {
    console.log(`Listening in http://localhost:${config.port}`);
});