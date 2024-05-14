import express from "express";
import { router } from "./routes";

import './shared/service/TranslateYup';


const server = express();

server.use(express.json());

server.use(router);


export { server };
