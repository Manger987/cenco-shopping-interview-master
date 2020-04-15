
const express = require('express');
const router  = express.Router();
import { AuthService } from './../services/auth.services';

router.post("/createAuth", async (req: any, res: any) => {
    try{
        console.log("createAuth:::req:",req.body);
        const auth = await AuthService.createAuthentication(req.body.email, req.body.password);
        await res.json(auth);
    } catch (error) {
        console.log('Error auth/createAuth', error)
        await res.json(error);
    }
});

router.post("/login", async (req: any, res: any) => {
    try {
        const user = await AuthService.loginEmailUser(req.body.email, req.body.password);
        await res.json(user);
    } catch (error) {
        console.log('error Auth:' , error)
        await res.json(error);
    }
});

router.get("/logOut",async (req: any, res: any) => {
    const login = await AuthService.logOut();
    console.log("logOut: ",login)
    res.json(login);
});

module.exports = router;