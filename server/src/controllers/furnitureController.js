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
    try {
        const furniture = await furnitureService.create(furnitureData);    
        res.json(furniture);

    } catch (error) {
        res.status(400).json(error);
    }

});

export default furnitureController;