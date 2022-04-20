import { Router } from "express";
import personRouter from "./person";

const router = Router();

router.use("/persons", personRouter);

export default router;
