import { Router, Response, Request } from "npm:express";
import getRecommendations from "../services/getRecommendations.ts";

const recommendationRouter = Router();

recommendationRouter.get('/', async (_req: Request, res: Response) => {
    const data = await getRecommendations();
    res.status(200).json(data);
})

export default recommendationRouter;
