const Notes = require('../db/notes');
const jsonDataBase = require('../db/db.json');
let dbArray = [];
dbArray.push(jsonDataBase);
const fs = require("fs");
const { pop } = require('methods');



module.exports = (app) => {
    app.get("/api/notes", (req, data) => {
        return data.json(dbArray);
    });
    
    app.post("/api/notes", (req, data) => {
        const id = (dbArray.length + 1).toString();
        const newData = {
            ...req.body,
            id: id
        };
        dbArray.push(newData);
        data.json(dbArray);
    
    });

    app.delete("/api/notes/:id", (req, data) => {

       const id = (req.params.id).toString();
       const test=dbArray.filter(x => {return x.id != id });
       console.log("+++++++++++", test);
        dbArray = test;
        return data.json(dbArray);
    
    });
}
