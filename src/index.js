import express from "express";
import bodyParser from 'body-parser';

import userRouter from './modules/User/router.js'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('',userRouter)

app.listen(3000, ()=>console.log("server creat"));
