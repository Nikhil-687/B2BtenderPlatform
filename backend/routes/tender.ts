import { Router } from 'express';
import {
  createTender,
  getAllTenders,
  getTenderById,
  markTenderAsCompleted
} from "../controllers/tender.controller";

const router = Router();

router.post('/create', createTender);
router.get('/', getAllTenders);
router.get('/:id', getTenderById);
router.put('/:id/complete', markTenderAsCompleted);

export default router;