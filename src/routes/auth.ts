
export {}
const express = require('express');
const router  = express.Router();
router.get("/login", (req: any, res: any) => {
    console.log('AUTH');
    res.json("Hello world!");
});

module.exports = router;