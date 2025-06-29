import { Router } from "express";
import userService from "../services/userService.js";

const userControler = Router();

userControler.post('/register', async (req, res) => {
    const UserData = req.body;
    
    try {
        const user = await userService.register(UserData);
        res.json(user);
    } catch (error) {
        res.status(400).json(error);
    }
});

userControler.get('/logout',(req,res) => {
    res.json({});
});

userControler.post('/login', async (req,res) => {
    
    const {email, password} = req.body;

    try {
        const user = await userService.login(email, password);
        res.json(user);
    } catch (error) {
        res.status(400).json(error);
    }
 
});
export default userControler;