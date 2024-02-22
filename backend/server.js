const express = require("express");

const app = express();

app.get("/", (req, res) => {
    //ruta a localhost 5000
    res.send("Hello World!!");
})

app.listen(5000,() => console.log('Server running on port 5000'));