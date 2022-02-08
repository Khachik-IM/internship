import { personList } from "../../res/user.js";
import validator from "validator";
import path from 'path';

let reqCount = 0;

//get Data
export const getData = (req, res) => {
    res.json(personList);
    // return res.sendFile(path.resolve('public/getUser/index.html'));
}

//create Data
export const createData = (req, res) => {
    // personList.push(req.body); 
    // res.send(personList);
    if (validator.isEmail(req.body.email) && !validator.isEmpty(req.body.name) && !validator.isEmpty(req.body.surname)) {
        personList.push({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email
        })
    } else {
        res.status(401).send('Error. Please click on resend')
    }
    res.status(200).send(personList);
}

//create Data get
export const createDataGet = (req, res) => {
    res.sendFile(path.resolve('public/create/index.html'))
}

//update Data
export const updateData = (req, res) => {
    const obj = personList.findIndex((el => el.name == req.body.searchName));
    if (validator.isEmail(req.body.updateEmail) && !validator.isEmpty(String(req.body.updateName)) && !validator.isEmpty(String(req.body.updateSurname))) {
        personList[obj] = { ...personList[obj], name: req.body.updateName, surname: req.body.updateSurname, email: req.body.updateEmail };
    } else {
        res.status(401).send('Error. Please click on resend');
    }
    res.status(200).send(personList);
}

//update Data get
export const updateDataGet = (req, res) => {
    res.sendFile(path.resolve('public/update/index.html'));
    // res.json(personList);
}

//delete Data
export const deleteData = (req, res) => {
    const id = personList.findIndex((el => el.name == req.body.name));
    personList.splice(id, 1);
    res.send(personList);
}

//delete Data get
export const deleteDataGet = (req, res) => {
    res.json(personList);
}

export const middleware = (req, res, next) => {
    reqCount++;
    console.log('count = ', reqCount);
    next();
}