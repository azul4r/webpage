const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {

    const { username, password } = req.body;

    console.log(`Login request received: username=${username}, password=${password}`);
    if (username === 'admin' && password === '12345678') {
        return res.json({ success: true, username: username });
    }
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
});


app.get('/', (req, res) => {
    res.send('Server jalan');
});
app.get('/hello', (req, res) => {
    res.json({ 
        message: 'Hello, World!' 

    });
});
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});