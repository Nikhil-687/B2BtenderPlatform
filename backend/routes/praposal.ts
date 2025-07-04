import { Router } from 'express';
import {
  submitProposal,
  getProposalsByTenderId,
  updateProposalStatus
} from './../controllers/praposal.controller';

const router = Router();

router.post('/', submitProposal);
router.get('/tender/:tenderId', getProposalsByTenderId);
router.put('/:id/status', updateProposalStatus);

export default router;