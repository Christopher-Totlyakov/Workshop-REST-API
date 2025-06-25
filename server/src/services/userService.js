import User from "../models/User.js"
import { generateAuthToken } from "../utils/authUtils.js";

export default{
    async register(userData){
        
        const user = await User.create(userData);

        const token = generateAuthToken(user);
        
        return {
            _id: user.id,
            email: user.email,
            accessToken: token,
        }
    }
}