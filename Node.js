const express = require("express");
const app = express();

app.use(express.json());

let User = [];

app.post("/user",(req,res) => {
    const { userName, age, email } = req.body;
    if( !userName || !age || !email ) { return res.status(404).json({error:"User parameter cannot be empty"})};
    User.push(req.body);
    const user= req.body
    res.status(201).json({message:"Successfully created",user});
});

app.get("/user",(req,res) => {
    res.status(200).json(User);
});

app.get("/user/:id",(req,res) => {
    const user = User.find(u => req.params.id === u.userName);
    if(!user) { return res.status(404).json({message:"User not found"})};
    res.status(200).json({message:"User found",user});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
