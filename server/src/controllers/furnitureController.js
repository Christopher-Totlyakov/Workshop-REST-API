import { Router } from "express";

const furnitureController = Router();

furnitureController.post('/',(req,res)=>{
    const furnitureData = req.body;
});

export default furnitureController;