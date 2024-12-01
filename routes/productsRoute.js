import express from 'express';
import comments from '../comments.js';

const productsRoute = express.Router();

productsRoute.get('/',(req,res) =>{
       res.status(200).send({status:200,message:"success",data:comments})
})

productsRoute.get('/:id',(req,res) =>{
    res.status(200).send({status:200,message:"success",data:[]})
})

export default productsRoute;