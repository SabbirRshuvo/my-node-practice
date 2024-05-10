const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var cors = require("cors");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const users = [
    { id: 1, name: "sabaan", email: "sabana@gmail.com", phone: "012322323232" },
    { id: 2, name: "kobita", email: "kobita@gmail.com", phone: "012322323232" },
    { id: 3, name: "bobita", email: "bobita@gmail.com", phone: "012322323232" },
    {
        id: 4,
        name: "shabnur",
        email: "shabnur@gmail.com",
        phone: "01232323232",
    },
    {
        id: 5,
        name: "nirjona",
        email: "nirjona@gmail.com",
        phone: "012322323232",
    },

    { id: 6, name: "nilufa", email: "nilufa@gmail.com", phone: "012322323232" },
];

app.use(cors());

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/user/:id", (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find((user) => user.id);
    res.send(user);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
