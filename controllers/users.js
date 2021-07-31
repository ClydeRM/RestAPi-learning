import { v4 as uuidv4 } from 'uuid';

// mock database for
let users = [];

export const getUsers = (req, res) => {
    // console.log(users);
    // res.send('Hello from users router Method: get()');
    res.send(users);
}

export const createUser = (req, res) => {
    // console.log("POST method has be Call");
    const user = req.body;
    users.push({ ...user, id: uuidv4() });

    // res.send("POST ROUTE REACHED");
    res.send(`User with the username ${user.firstName}`);
}

// /user/123 => req.params {id: 123}
export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find(user => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);
    res.send(`User with the ID ${id} has been deleted`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the ID ${id} has been updated`);
}
