const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");


const app = express()
const PORT = process.env.PORT || 5000;

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.get("/", (req, res) =>{
    res.send("Hello, World LOl");
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));