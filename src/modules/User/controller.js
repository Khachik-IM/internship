import { usersArr } from "../../res/user.js";
import path from 'path'

export const getAllUser = (req,res) => {
    res.sendFile(path.resolve('getAllUsers.html'))
    
    res.send(usersArr)
  }

export const getUserbyId = (req,res)=>{
    res.sendFile(path.resolve('getUserById.html'))
}

export const postUserId = (req, res) => {
    const userIndex = req.body.userId
    console.log(userIndex);
    const index = usersArr.findIndex(elm => userIndex == elm.userId);
    
     if( index === -1){
         res.status(404).send("<h1>User note found on the server </h1>")
     }else{
         res.send(usersArr[index])
     }
    
}


export const addUser =(req, res) =>{
    res.sendFile(path.resolve('addUser.html'))
}
export const postAddUser = (req, res) => {
    let newUser = req.body
    console.log(newUser);
    
    usersArr.push(newUser)
    res.send(usersArr)
}


export const deleteById = (req,res)=>{
    res.sendFile(path.resolve('getDeleteById.html'))
}
export const deleteUserbyId = (req, res) =>{
    
    const userIndex = req.body.userId
    console.log(userIndex);
    const index = usersArr.findIndex(el => el.userId == userIndex); //index
    
    if(index === -1){
        res.status(404).send("<h1>User note found on the server </h1>")
    }else{
        usersArr.splice(index, 1)
        res.send(usersArr)
    }
    

}

export const updateById = (req,res)=>{
    res.sendFile(path.resolve('updateUser.html'))
}

export const putUpdatebyId = (req, res) =>{

    let userIndex =req.body.userId;
    console.log(req.body);

    const index = usersArr.findIndex(elm => userIndex == elm.userId);
    console.log(index); 
    
    usersArr[index] = {...usersArr[index], userId:req.body.userId, name:req.body.name};
    console.log(usersArr[index]);
   
res.send(usersArr)
}

  