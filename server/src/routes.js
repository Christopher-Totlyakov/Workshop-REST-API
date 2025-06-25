import { Router } from "express";
import userControler from "./controllers/userController.js";

const routes = Router();

routes.use('/users', userControler);

export default routes;