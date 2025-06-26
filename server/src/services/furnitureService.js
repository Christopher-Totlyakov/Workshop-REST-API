import Furniture from "../models/furniture.js"

export default {
    async create(furnitureData, ownerId){
        return await Furniture.create({ ...furnitureData, _ownerId: ownerId });
    },
    async getAll(){
        return await Furniture.find();
    },
    async getById(id){
        return await Furniture.findById(id);
    },
    async deleteById(id){
        return await Furniture.findByIdAndDelete(id);
    },
    async edit(id, furnitureData){
        return await Furniture.findByIdAndUpdate(id, furnitureData);
    }
}