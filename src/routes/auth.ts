
import express from 'express';
const app = express();
import { AuthService } from './../services/auth.services';

app.post("/createAuth", async (req: any, res: any) => {
    try{
        const auth = await AuthService.createAuthentication(req.body.email, req.body.password);
        await res.json(auth);
    } catch (error) {
        await res.json(error);
    }
});

app.post("/login", async (req: any, res: any) => {
    try {
        const user = await AuthService.loginEmailUser(req.body.email, req.body.password);
        await res.json(user);
    } catch (error) {
        await res.json(error);
    }
});

app.get("/logOut",async (req: any, res: any) => {
    const login = await AuthService.logOut();
    res.json(login);
});

export default app;