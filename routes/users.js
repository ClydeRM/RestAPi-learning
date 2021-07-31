import express from 'express';

const router = express.Router();

// mock database for
const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "John",
        lastName: "Ceeeena",
        age: 77
    }

];

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
    users.push(user);

    // res.send("POST ROUTE REACHED");
    res.send(`User with the username ${user.firstName}`);
});


export default router;
