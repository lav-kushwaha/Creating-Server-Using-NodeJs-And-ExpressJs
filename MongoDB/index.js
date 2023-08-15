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
    emailId:{type: String },
    address:{type:String},
});

const studModel = new mongoose.model("StudentDetails",student);

const adder = async () => {

    //first way to insert data.
    // const ss = new studModel({
    //     name:"lav",
    //     emailId:"lav@gmail.com",
    //     address:"Silvassa"
    // })
    // await ss.save();

    //second way to insert data.
    // const data = await studModel.create({
    //     name:"Kush",
    //     emailId:"Kush@gmail.com",
    //     address:"Rakholi"
    // });

    //Read Data from MongoDB.
    const read = await studModel.find();
    console.log(read)
}
adder();