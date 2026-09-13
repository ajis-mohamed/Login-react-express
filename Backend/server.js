const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
    {
        id: 1,
        username: "Aziz Pheonix",
        email: "azizpheonix51@gmail.com",
        password: "Ajisarfan0@"
    }
];

let nextId = 2;


// Home
app.get("/", (req, res) => {
    res.send("Backend is working!");
});


// Signin
app.get("/signin", (req, res) => {

    let { email, password } = req.query;

    if (!email || !password) {
        return res.status(400).send("Login Failed: Missing credentials");
    }

    email = decodeURIComponent(email).trim();
    password = decodeURIComponent(password).trim();

    const userFound = users.find(
        (item) =>
            item.email === email &&
            item.password === password
    );

    if (userFound) {
        return res.status(200).send("Login Successful");
    } else {
        return res.status(404).send("Login Failed");
    }
});


// Signup
app.post("/signup", (req, res) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send("Missing fields");
    }

    users.push({
        id: nextId++,
        username,
        email,
        password
    });

    return res.status(201).send("Signup Successful");
});


// Local server
if (process.env.NODE_ENV !== "production") {

    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    });

}


// Vercel
module.exports = app;