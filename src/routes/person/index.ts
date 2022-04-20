import { Router } from "express";
import {
  createPersonController,
  retrievePersonController,
  updatePersonController,
} from "../../controllers";
import deletePersonController from "../../controllers/person/delete.controller";
import validateShape from "../../middlewares/validateShape.middleware";
import { createPersonShape } from "../../shapes";
import updatePersonShape from "../../shapes/person/update.shape";

const personRouter = Router();

personRouter.get("", retrievePersonController);

personRouter.post("", validateShape(createPersonShape), createPersonController);

personRouter.put(
  "/:id",
  validateShape(updatePersonShape),
  updatePersonController
);

personRouter.delete("/:id", deletePersonController);

export default personRouter;
