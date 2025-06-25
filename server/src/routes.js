import { Router } from "express";
import userControler from "./controllers/userController.js";
import furnitureController from "./controllers/furnitureController.js";

const routes = Router();

routes.use('/users', userControler);
routes.use('/data/catalog', furnitureController);

export default routes;