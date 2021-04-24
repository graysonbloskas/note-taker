// globals; made an empty array on line 4 to push data to. 
const Notes = require('../db/notes');
const jsonDataBase = require('../db/db.json');
let dbArray = [];
dbArray.push(jsonDataBase);
const fs = require("fs");
const { pop } = require('methods');


// gets data from api/notes
module.exports = (app) => {
    app.get("/api/notes", (req, data) => {
        return data.json(dbArray);
    });
    // posts data from api/notes, stringified, to the empty array, 
    app.post("/api/notes", (req, data) => {
        const id = (dbArray.length + 1).toString();
        const newData = {
            ...req.body,
            id: id
        };
        dbArray.push(newData);
        data.json(dbArray);
    
    });
// Deletes notes from the array using filter method
    app.delete("/api/notes/:id", (req, data) => {

       const id = (req.params.id).toString();
       const test=dbArray.filter(x => {return x.id != id });
        dbArray = test;
        return data.json(dbArray);
    
    });
}
