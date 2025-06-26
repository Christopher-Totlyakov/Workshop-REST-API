import { Router } from "express";
import furnitureService from "../services/furnitureService.js";

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {

    const params = new URLSearchParams(req.query.where?.replaceAll('"',''));
    const filter = Object.fromEntries(params.entries());

    try {
        const furnitures = await furnitureService.getAll(filter);
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
    
});

furnitureController.delete('/:id', async (req, res) => {
    const furnitureId = req.params.id;

    try {
        const furniture = await furnitureService.getById(furnitureId);

        if (furniture._ownerId.toString() != req.user.id) {
            throw new Error("You are not owner")
        }
        
        await furnitureService.deleteById(furnitureId);
        res.json({});
    } catch (error) {
        res.status(400).json(error);
    }

})

furnitureController.put('/:id', async (req, res) => {
    const furnitureId = req.params.id;
    const furnitureData = req.body;

    try {
        const furniture = await furnitureService.getById(furnitureId);

        if (furniture._ownerId.toString() != req.user.id) {
            throw new Error("You are not owner");
        }

        const editFurniture = await furnitureService.edit(furnitureId, furnitureData);
        res.json(editFurniture);
    } catch (error) {
        res.status(400).json(error);
    }

})

export default furnitureController;