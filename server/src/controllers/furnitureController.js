import { Router } from "express";
import furnitureService from "../services/furnitureService.js";

const furnitureController = Router();

furnitureController.post('/',async (req,res)=>{
    const furnitureData = req.body;

    const furniture = await furnitureService.create(furnitureData);    
    res.json(furniture);
});

export default furnitureController;