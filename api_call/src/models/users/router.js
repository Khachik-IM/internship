import express from 'express';
import { createData, deleteData, getData, updateData, createDataGet, updateDataGet, deleteDataGet } from './controller.js';

const router = express.Router();

//get data
router.get('/', getData);

//create data
router.get('/create', createDataGet);
router.post('/create', createData);

//update data
router.get('/update', updateDataGet);
router.post('/update', updateData);

//delete data
router.get('/delete/:name', deleteDataGet);
router.delete('/delete/:name', deleteData);

export default router;