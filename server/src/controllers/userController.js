import { Router } from "express";
import userService from "../services/userService.js";

const userControler = Router();

userControler.post('/register', async (req, res) => {
    const UserData = req.body;
    
    try {
        const user = await userService.register(UserData);
        res.json(user);
    } catch (error) {
        console.log(error)
    }
});

export default userControler;