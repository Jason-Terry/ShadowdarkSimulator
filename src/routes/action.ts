import express from "express";
import controller from "../controllers/action.controller";
import { validateRequest } from "../middleware/requestValidation";
import { ActionSchema } from "../entities/action.ent";

const router = express.Router();

router.post('/', validateRequest(ActionSchema), controller.createAction);
router.get('/:id', controller.readAction);
router.get('/', controller.readAllActions);
router.put('/:id', controller.updateAction);
router.delete('/:id', controller.deleteAction);

export default router;