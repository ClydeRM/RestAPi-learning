import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


const router = express.Router();

// mock database for
let users = [];

// all routes in here are starting with /users
// because I set the routes beginning with /users in index.js
// so request('/users') doesn't make sense
// request('/') is the right description
router.get('/', (req, res) => {
    // console.log(users);
    // res.send('Hello from users router Method: get()');
    res.send(users);
});

router.post('/', (req, res) => {
    // console.log("POST method has be Call");
    const user = req.body;
    users.push({ ...user, id: uuidv4()});

    // res.send("POST ROUTE REACHED");
    res.send(`User with the username ${user.firstName}`);
});

// /user/123 => req.params {id: 123}
router.get('/:id', (req,res)=>{
    const { id } = req.params;

    const foundUser = users.find( user => user.id === id);

    res.send(foundUser);
});

router.delete('/:id', (req, res)=>{
    const { id } = req.params;
    users = users.filter( user => user.id !== id);
    res.send(`User with the ID ${id} has been deleted`);
})

export default router;
