import express from 'express';
import dotenv from 'dotenv';
import comments from './comments.js';
import productsRoute from './routes/productsRoute.js'

const app = express();
dotenv.config();

app.get('/',(req,res)=>{
    res.status(200).send("Welcome Backend")
})

// app.get('/profile',(req,res)=>{
//     res.status(200).send("Welcome to Profile Page")
// })

// app.get('/users',(req,res)=>{
//     res.status(200).send("Welcome to Users Page")
// })

// app.get('/users/:id',(req,res)=>{
//     const id = req.params.id;
//     res.status(200).send(`Welcome to user page ${id}`)
// })

// app.get('/comments',(req,res)=>{
//     res.status(200).send({status:200,message:"success",data:comments})
// })

// app.get('*',(req,res)=>{
//     res.status(404).send("Page not found")
// })

app.use('/products',productsRoute);


const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}) 