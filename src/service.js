const app = require('./server');
const PORT = 3000;

// Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});