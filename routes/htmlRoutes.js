const path = require("path");

module.exports = (app) => {
    app.get("/notes", (req, data) => {
        data.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", (req, data) => {
        data.sendFile(path.join(__dirname, "../public/index.html"));
    });
}