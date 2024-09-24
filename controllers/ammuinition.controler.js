import exp from 'express'
import fs from 'fs/promises'
import  {v4} from 'uuid'


const router = exp.Router()


////
router.get('/',async(req,res) => {
    try{
     // get the data from file
     const data = await fs.readFile('./data.json','utf-8')
     
    // send it to the client
    res.json(JSON.parse(data))

    }catch(err){
        res.status(500).json({ 
            err: true,
            message: err
        })
    }
 })


 ////
//  router.get('/:id', async(req,res) =>{
//     try{
//     //get data from file
//     const data = JSON.parse(await fs.readFile('./data.json','utf-8'))
//     // find the one with the right id
//     const amn = data.find(am => am.id === req.params.id)
//     //
//     res.json(amn)
//     }catch(err){
//         res.status(500).json({
//             err:true,
//             message:err
//         })
//     }
     
//  })


 ////
 router.get('/summary',async (req,res) =>{
    try{
        const data =JSON.parse(await fs.readFile('./data.json','utf-8'))
        const result = data.reduce((obj,curr) =>{
            curr.active && obj.active++
            curr.status && obj.in_stock++
            return obj
        }, {
            active:0,
            in_stock:0
        })
        result.sum = data.length
        res.json(result)
    }catch(err){
        res.status(500).json({
            err:true,
            message:err
        })
    }
})


 ////
 router.post('/',async(req,res) =>{
    try{
        const data =JSON.parse(await fs.readFile('./data.json','utf-8'))
        data.push({
            id:v4(),
            ...req.body
        })
        await fs.writeFile('./data.json',JSON.stringify(data),{
            encoding:'utf-8'
        })
        
        res.send(req.body)

    }catch(err){
    }  
 })


 ////
 router.patch('/:id',async(req,res) =>{
    try{
        const data =JSON.parse(await fs.readFile('./data.json','utf-8'))
        const amn = data.findIndex(am => am.id === req.params.id)
        const newAmn = {
            ...data[amn],
            ...req.body
        }
       data[amn] = newAmn
        await fs.writeFile('./data.json',JSON.stringify(data),{
            encoding:'utf-8'
        })
        res.send(req.body)
    }catch(err){
    }
 })

 export default router
