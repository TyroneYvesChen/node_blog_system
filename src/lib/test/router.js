import { Router } from "express";
import wocao from "./controller";

const router = new Router();

router.get("/test", wocao.test);

export default router;
