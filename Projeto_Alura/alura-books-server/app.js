const express = require("express");
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Subindo API")
})

app.listen(port, () => {
    console.log("Ativando API")
})