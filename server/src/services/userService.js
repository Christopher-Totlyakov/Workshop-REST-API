import User from "../models/User.js"
import { generateAuthToken } from "../utils/authUtils.js";
import bcrypt from "bcrypt";

export default{
    async register(userData){
        
        const user = await User.create(userData);

        const token = generateAuthToken(user);
        
        return {
            _id: user.id,
            email: user.email,
            accessToken: token,
        }
    },
    async login(email,password){
       const user = await User.findOne({email})
       if (!user) {
           throw new Error('Invalid email or password');
       }

        const isValidPass = await bcrypt.compare(password, user.password);

        if (!isValidPass) {
            throw new Error('Invalid email or password');
       }

        const token = generateAuthToken(user);

        return {
            _id: user.id,
            email: user.email,
            accessToken: token,
        }
    }
}