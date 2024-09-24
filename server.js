import express from  'express'
import amnControler from './controllers/ammuinition.controler.js'


import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.use(express.json())


app.use('/amn',amnControler)

const port = 7499


////
app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/views/index.html')
})


////
app.listen(port, () => {
    console.log(`Server started on port ${port} visit http://localhost:${port}`);
})

 