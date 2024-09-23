 import express from  'express'

 const app = express()

 const port = 7499

 app.get('/',(req,res) =>{
    res.send("welcome to my Ammuntion Center")

 })
 app.get('/amn',(req,res) =>{
    res.send("Function not implemented yet")

 })
 app.get('/amn/:id',(req,res) =>{
    res.send("Function not implemented yet")

 })
 app.get('/amn/summary',(req,res) =>{
    res.send("Function not implemented yet")

 })
 app.post('/amn',(req,res) =>{
    res.send("Function not implemented yet")

 })
 app.fetch('/amn',(req,res) =>{
    res.send("Function not implemented yet")

 })

 app.listen(port, () => {
    console.log(`Server started on port ${port} visit http://localhost:${port}`);
    

 })