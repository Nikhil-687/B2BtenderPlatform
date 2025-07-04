import { Router } from "express"; 
import {
    signup,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser,
    createCompany
  } from './../controllers/user.controller';
  
const Route = Router();

Route.post("/register", signup);
Route.post('/login', loginUser);
Route.get('/', getAllUsers);
Route.get('/:id', getUserById);
Route.post('/:id/company/register', createCompany);
Route.put('/:id', updateUser);
Route.delete('/:id', deleteUser);

export default Route;