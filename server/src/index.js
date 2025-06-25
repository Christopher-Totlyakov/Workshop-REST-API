import express from 'express';
import cors from 'cors';

import initDatabase from './config/dbConfig.js';
import routes from './routes.js';
import { auth } from './middlewares/authMiddleware.js';



const app = express();
initDatabase();

app.use(cors());

app.use(express.json());

app.use(auth)

app.use(routes);


app.listen(3030, () => console.log("Server listening on http://localhost:3030"));