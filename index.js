import express from 'express';
import dotenv from 'dotenv';
import commentsRoute from './routes/commentsRoute.js';
import postsRoute from './routes/postsRoute.js';
import albumsRoute from './routes/albumsRoute.js';
import photosRoute from './routes/photosRoute.js';

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



app.use('/posts',postsRoute);
app.use('/posts/comments',commentsRoute);
app.use('/albums',albumsRoute);
app.use('/albums/photos',photosRoute);

app.get('*',(req,res)=>{
    res.status(404).send("Page not found")
})


const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}) 