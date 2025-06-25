import { Router } from "express";
import userControler from "./controllers/userController";

const routes = Router();

routes.use('/users', userControler);

export default routes;