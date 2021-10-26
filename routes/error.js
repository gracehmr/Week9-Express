const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(404);
    res.send("The website you seek\nLies beyond our perception\nBut others await");
});

module.exports = router; 