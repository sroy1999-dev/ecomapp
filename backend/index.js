const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(express.json({limit : "10mb"}));
dotenv.config();

//mongodb connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    throw err;
});

//schema
const userSchema = new mongoose.Schema({
    image: String,
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    confirmPassword: String
});

//model
const userModel = mongoose.model('user', userSchema);

//API
app.get("/", (req, res) => {
    res.send("Server is running");
});

//signup api
app.post("/signup", async(req, res) => {
    console.log(req.body);
    const {email} = req.body;
    const result = await userModel.findOne({email : email});
    if(result){
        res.send({message: "Email already registered", alert: false});
    }else{
        const data = userModel(req.body)
        data.save();
        res.send({message : "Successfully signup", alert: true});
    }
});

//login api
app.post("/login", async(req, res) => {
    console.log(req.body);
    const {email} = req.body;
    const result = await userModel.findOne({email : email});
    if(result){
        const dataSend = {
            _id:result._id,
            image:result.image,
            firstName:result.firstName,
            lastName:result.lastName,
            email:result.email,
        }
        console.log(dataSend);
        res.send({message: "Login successfull", alert: true, data: dataSend});
    }else{
        res.send({message: "Incorrect email id or password", alert: false});
    }
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});