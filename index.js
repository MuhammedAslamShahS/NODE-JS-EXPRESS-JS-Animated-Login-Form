const express = require("express");
const app = express();

app.use(express.static("views"));


const email = "shah@shah.shah";
const password = "1234";

app.post("/login", (req, res) => {
    console.log(req.body);
    
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);
