/**
 * Root Router
 * Redirections to Routers
 */

import express, { Request, Response } from "express";
import { helloRouter } from "./HelloRouter";
import { LogInfo } from "@/utils/logger";

// Server instace
const server = express();

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
    LogInfo("GET /api")
	res.send("Hello World");
});

// Redirections to Routers
server.use("/", rootRouter);
server.use("/hello", helloRouter);

export default server;
