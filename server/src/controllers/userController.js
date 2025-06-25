import { Router } from "express";

const userControler = Router();

userControler.post('/register', (req, res) => {
    console.log(req.body);
    res.end();
});

export default userControler;