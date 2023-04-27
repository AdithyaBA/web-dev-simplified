const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.get("/",(req, res) => {
    res.send("Hello world");
})

// Start the server
app.listen(5000, () => {
    console.log(`Server is running on PORT 5000`);
})