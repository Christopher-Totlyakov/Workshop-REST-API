import jsonwebtoken from 'jsonwebtoken'
import { JWT_Secret } from '../config/const.js'

export const generateAuthToken = (user) => {


    return jsonwebtoken.sign(
        {
            id: user.id,
            email: user.email,
        },
        JWT_Secret,
        {
            expiresIn: '2h'
        }
    )
}