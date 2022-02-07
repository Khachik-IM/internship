import express from "express";
import { getUsers } from "./crudMetods.js";
import { usersArr } from "./users.js";
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

//get alluser
app.get("/alluser", (req,res) => {
    
    res.send(usersArr)
  })

  //get one user 
  app.get('/user/:userId', (req,res)=>{
      const userIndex = req.params.userId;
      const index = usersArr.findIndex(elm => userIndex == elm.userId);
      res.send(usersArr[index])
  })

//add user
app.post('/adduser', (req, res) => {
     let newUser = req.body
     usersArr.push(newUser)
     res.send(usersArr)
})

//delete user
app.delete('/delete/:userId', (req, res) =>{
    
    const userIndex = req.params.userId

    // const index = usersArr.findIndex(el => el.userId == userIndex); //index

    // usersArr.splice(index, 1);

    usersArr.filter(elm =>{
        if(elm.userId === userIndex){
            elm.userId.splice(elm.indexOf(elm),1)
        }
    })
    
    console.log("userindex  "+ userIndex);

    res.send(usersArr)

})

//update user
app.put('/update/:userId', (req, res) =>{

    let userIndex =req.params.userId;
    console.log(userIndex);

    const index = usersArr.findIndex(elm => userIndex == elm.userId);
     console.log(index);

    usersArr[index] = {...usersArr[index],...req.body};
   
res.send(usersArr)
})
   
app.listen(3000, ()=>console.log("server creat"));