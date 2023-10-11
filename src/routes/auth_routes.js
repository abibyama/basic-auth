const express = require('express');
const router = express.Router();

// Mock user
const user = {
    username: 'user',
    password: 'password'
};

// Routes
router.get('/', (req, res) => {
    const isLoggedIn = req.session.isLoggedIn;
    res.send(`
        <h1>Welcome</h1>
        <p>${isLoggedIn ? 'Logged in' : 'Not logged in'}</p>
        <a href="/login">Login</a> | <a href="/logout">Logout</a>
         <!-- Purpose 2: Analytics -->
    <div>
        <h2>Analytics</h2>
        <p>We collect anonymous data to improve our services.</p>
        <label>
            <input type="checkbox" id="analyticsConsent"> I consent to data collection for analytics
        </label>
    </div>
    `);
});

router.get('/login', (req, res) => {
    res.send(`
        <h1>Login</h1>
        <form method="post" action="/login">
            Username: <input type="text" name="username" required><br>
            Password: <input type="password" name="password" required><br>
            <input type="submit" value="Login">
        </form>
    `);
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === user.username && password === user.password) {
        req.session.isLoggedIn = true;
        res.redirect('/');
    } else {
        res.send('Invalid credentials. <a href="/login">Try again</a>');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/');
        }
        res.redirect('/');
    });
});

module.exports = router;