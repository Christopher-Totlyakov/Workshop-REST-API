import Furniture from "../models/furniture.js"

export default {
    async create(furnitureData){
        return await Furniture.create(furnitureData);
    },
    async getAll(){
        return await Furniture.find();
    },
    async getById(id){
        return await Furniture.findById(id);
    }
}