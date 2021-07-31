import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const PORT = 5000; // backend listening port can be any number greater than 1023

app.use(bodyParser.json());
app.listen(PORT, ()=>{ 
    console.log(`Server Running on port: http://localhost:${PORT}`);
});


