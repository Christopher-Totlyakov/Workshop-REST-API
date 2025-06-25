import jsonwebtoken from 'jsonwebtoken'
import { JWT_Secret } from '../config/const.js';

export const auth = (req,res, next) => {
    const token = req.headers('X-Authorization');

    if (!token) {
        return next();
    }

    try {
        const user = jsonwebtoken.verify(token, JWT_Secret);

        req.user = user;
        next()
    } catch (error) {
        res.status(401).end();
    }
};