const PORT = 5000;
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const execFile = require('child_process').fork;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/run/:id', (req, res) => {
    const child = execFile('child.js');
    let data = {
        id: req.params.id
    };
    child.send(data);
    child.on('message', (msg) => {
        res.end(`Process finished. ${msg}`);
    }); 
});

app.listen(PORT, () => {
    console.log("Server is listening on port ", PORT);
});
