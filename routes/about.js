const router = require("express").Router();

router.get("/", (req, res) => {
    // Imagine this came from a database
    const data = {
        name: "Grace",
        hobbies: ["cooking", "video games", "reading", "skincare"]
    };

    res.status(200);
    res.json(data);
});

module.exports = router;