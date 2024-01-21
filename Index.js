const express = require('express');
const cors    = require('cors');
const PORT    = process.env.PORT || 9001;
const app     = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/data', (req, res) => {
    console.log(req.body);
    res.send('Data received!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
