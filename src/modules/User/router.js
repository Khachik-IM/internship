import express from "express";
import { addUser, deleteById, deleteUserbyId, getAllUser, getUserbyId, postAddUser, postUserId, putUpdatebyId, updateById } from "./controller.js";

const router = express.Router()

//get alluser
router.get("/alluser", getAllUser)

//get one user 
router.get('/user', getUserbyId)
router.post('/user', postUserId)

//add user
router.get('/adduser',addUser)
router.post('/adduser', postAddUser)

//delete user
router.get('/delete', deleteById)
router.post('/delete', deleteUserbyId)

//update user
router.get('/update',updateById)
router.post('/update', putUpdatebyId)
   
export default router;