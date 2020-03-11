
export {}
const express = require('express');
const router  = express.Router();
router.get("/loginUser", (req: any, res: any) => {
    res.json("Hello world!");
});

module.exports = router;