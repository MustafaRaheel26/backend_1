import express from 'express';
import comments from '../comments.js';

const commentsRoute = express.Router();

commentsRoute.get('/',(req,res) =>{
       res.status(200).send({status:200,message:"success",data:comments})
})

commentsRoute.get('/:id',(req,res) =>{
    res.status(200).send({status:200,message:"success",data:[]})
})

export default commentsRoute;