const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.use((req,res,next) =>{
    res.status(404).send(
        "<h1> Nem található ilyen fájl.</h1>"
    )
});

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './public', 'index.html'), function(err) {
        res.status(500).send(
            "<h1> Hiba az oldal betöltésekor.</h1>"
        )
    });
});

app.listen(port, () => {
    console.log(`Fut`);
});