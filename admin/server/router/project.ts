import { Router, Response, Request } from 'npm:express';
import getProjects from "../services/getProjects.ts";

const projectRouter = Router();

projectRouter.get('/', async (_req: Request, res: Response) => {
    const data = await getProjects();
    res.status(200).json(data);
})

export default projectRouter;
