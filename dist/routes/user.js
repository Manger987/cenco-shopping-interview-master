"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
router.get("/loginUser", (req, res) => {
    res.json("Hello world!");
});
module.exports = router;
//# sourceMappingURL=user.js.map