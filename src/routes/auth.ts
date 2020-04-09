
const express = require('express');
const router  = express.Router();
import { AuthService } from './../services/auth.services';

router.post("/createAuth", async (req: any, res: any) => {
    console.log("createAuth:::req:",req.body);
    const auth = await AuthService.createAuthentication(req.body.email, req.body.password);
    res.json(auth);
});

router.post("/login", async (req: any, res: any) => {
    console.log("login:::req:",req.body);
    const user = await AuthService.loginEmailUser(req.body.email, req.body.password);
    res.json(user);
});

router.get("/logOut",async (req: any, res: any) => {
    const login = await AuthService.logOut();
    console.log("logOut: ",login)
    res.json(login);
});

module.exports = router;