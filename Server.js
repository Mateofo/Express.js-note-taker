
const express = require('express');
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes.js');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.use(express.static("public"));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);