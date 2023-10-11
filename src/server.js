const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth_routes');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

// Use auth routes
app.use(authRoutes);

module.exports = app;