import { Router } from "express"; 
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser
  } from './../controllers/user.controller';
  
const Route = Router();

Route.post("/register", createUser);
Route.post('/login', loginUser);
Route.get('/', getAllUsers);
Route.get('/:id', getUserById);
Route.put('/:id', updateUser);
Route.delete('/:id', deleteUser);

export default Route;