const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/StudentData",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("Connected Successful...");
})
.catch((err)=>{
    console.log(err)
});

const student = new mongoose.Schema({
    name:{type:String},
    emailId : {type: String },
    address:{type:String},
});

const studModel = new mongoose.model("StudentDetails",student);

const adder = async () => {
    const ss = new studModel({
        name:"lav",
        emailId:"lav@gmail.com",
        address:"Silvassa"
    })
    await ss.save();
}
adder();