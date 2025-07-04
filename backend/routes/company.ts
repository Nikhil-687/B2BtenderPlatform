import { Router } from 'express';
import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany, 
  addMemberToCompany,
  removeMemberFromCompany
} from '../controllers/company.controller';

const router = Router();

router.post('/register', createCompany);
router.get('/', getAllCompanies);
router.get('/:id', getCompanyById);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);
router.put('/:id/add-member', addMemberToCompany);
router.put('/:id/remove-member', removeMemberFromCompany);

export default router;