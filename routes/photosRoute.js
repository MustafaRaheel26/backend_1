import express from 'express';
import photos from '../photos.js';

const photosRoute = express.Router();

photosRoute.get('/',(req,res) =>{
       res.status(200).send({status:200,message:"success",data:photos})
})

// postsRoute.get('/:id',(req,res) =>{
//     res.status(200).send({status:200,message:"success",data:[]})
// })

export default photosRoute;