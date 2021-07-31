// use mock backend user.json to test Api

import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './routes/users.js';

const app = express();
const PORT = 5000; // backend listening port can be any number greater than 1023

app.use(bodyParser.json());

app.use('/users', usersRouter);

app.get('/', (req, res)=>{
    res.send('Hello from HomePage.');
});

app.listen(PORT, ()=>{ 
    console.log(`Server Running on port: http://localhost:${PORT}`);
});


