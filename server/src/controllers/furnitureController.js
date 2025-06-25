import { Router } from "express";
import furnitureService from "../services/furnitureService.js";

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {
    try {
        const furnitures = await furnitureService.getAll();
        res.json(furnitures);
    } catch (error) {
        res.status(400).json(error);
    }

});

furnitureController.post('/',async (req,res)=>{
    const furnitureData = req.body;
    const ownerId = req.user.id;
    try {
        const furniture = await furnitureService.create(furnitureData, ownerId);    
        res.json(furniture);

    } catch (error) {
        res.status(400).json(error);
    }

});

furnitureController.get('/:id',async (req,res)=>{
    const furnitureId = req.params.id;

    try {
        const furniture = await furnitureService.getById(furnitureId);
        res.json(furniture);
    } catch (error) {
        res.status(400).json(error);
    }
    
})

export default furnitureController;