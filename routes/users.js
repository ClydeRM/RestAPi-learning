import express from 'express';

const router = express.Router();

// all routes in here are starting with /users
// because I set the routes beginning with /users in index.js
// so get('/users') doesn't make sense
// request('/') is the right description
router.get('/', (req, res) => {
    res.send('Hello from users router Method: get()');
});



export default router;
