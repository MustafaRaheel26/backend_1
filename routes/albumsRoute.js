import express from 'express';
import albums from '../albums.js';

const albumsRoute = express.Router();

albumsRoute.get('/',(req,res) =>{
       res.status(200).send({status:200,message:"success",data:albums})
})

// postsRoute.get('/:id',(req,res) =>{
//     res.status(200).send({status:200,message:"success",data:[]})
// })

export default albumsRoute;