const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));

const email_DB = "shah@shah.shah";
const password_DB = "1234";

const PORT = process.env.PORT || 3001;

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === email_DB && password === password_DB) {
        res.send("<h1>Login SuccessFully</h1>");
    } else {
        res.send("<h1>Login failed</h1>");
    }
});

app.listen(PORT);
