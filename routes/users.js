import express from 'express';
import {getUsers, createUser, getUser, deleteUser, updateUser} from "../controllers/users.js";

const router = express.Router();

// all routes in here are starting with /users
// because I set the routes beginning with /users in index.js
// so request('/users') doesn't make sense
// request('/') is the right description
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id',getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
