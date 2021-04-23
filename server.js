// requires express
const express = require("express");
// Create instance of express and we are defining a port using an environment variable
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
require("./routes/apiRoutes")(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`listening on PORT: http://localhost:${PORT}`));

