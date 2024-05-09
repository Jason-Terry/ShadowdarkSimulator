import express from "express";
import controller from "../controllers/creature";

const router = express.Router();

router.post('/new',  controller.createCreature);
router.get('/:id', controller.readCreature);
router.get('/all', controller.readAll);
router.put('/:id', controller.updateCreature);
router.delete('/:id', controller.deleteCreature);

export default router;