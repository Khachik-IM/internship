import express from 'express';
import bodyParser from 'body-parser';
import router from './models/users/router.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', router);

app.listen(3000);