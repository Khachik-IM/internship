import express from 'express';
import { getData, createData, deleteData, middleware } from './controller.js';

const router = express.Router();

router.use(middleware);

//get data
router.get('/', getData);

//create data
router.post('/create/:name', createData); 

//delete data
router.delete('/delete/:name', deleteData); 

export default router;