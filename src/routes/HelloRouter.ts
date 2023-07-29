import { HelloController } from "@/controller/HelloController";
import { LogInfo } from "@/utils/logger";
import { Router, Request, Response } from "express";

// Router from express
export const helloRouter = Router();

helloRouter.route("/").get(async (req: Request, res: Response) => {
	const name = req?.query?.name;
	LogInfo(`Query param: ${name}`);
	// Controller instance
	const controller: HelloController = new HelloController();
	// Obtain response
	const response = await controller.getMessage(name?.toString());
	return res.send(response);
});
