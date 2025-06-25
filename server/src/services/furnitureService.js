import Furniture from "../models/furniture.js"

export default {
    async create(furnitureData){
        return await Furniture.create(furnitureData);
    }
}