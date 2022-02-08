import fs from 'fs';
import async from 'async';

let reqCount = 0;

//get Data
export const getData = (req, res) => {
    if (null) {
        res.send('book chka')
    } else {
        fs.readdir('./assets/', (err, filesPath) => {
            if (err) res.status(500).send(err);
            filesPath = filesPath.map((filePath) => { //generating paths to file
                return './assets/' + filePath;
            });
            async.map(filesPath, (filePath, cb) => { //reading files or dir
                fs.readFile(filePath, 'utf8', cb);
            }, (err, results) => {
                console.log(results); //this is state when all files are completely read
                res.status(200).send(results); //sending all data to client
            });
        });
    }
}

//create Data get
export const createData = (req, res) => {
    fs.appendFile(`./assets/${req.params.name}.txt`, `${req.body.name}`, (error) => {
        if (error) res.status(500).send(err);
    });
    res.status(200).send("File written successfully");
}

//delete Data get
export const deleteData = (req, res) => {
    fs.unlink(`./assets/${req.params.name}.txt`, (err) => {
        if (err) res.status(500).send(err);
    });
    res.status(200).send("File deleted successfully");
}

export const middleware = (req, res, next) => {
    reqCount++;
    console.log('count = ', reqCount);
    next();
}