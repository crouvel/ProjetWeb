const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("<html></html>");
});

router.post('/', (req, res) => {
    res.send("Hello world !");
});

router.put('/', (req, res) => {
    res.send("Hello world !");
});

router.delete('/', (req, res) => {
    // Je supprime en base des trucs
    res.send("deleted !");
});

module.exports = router;