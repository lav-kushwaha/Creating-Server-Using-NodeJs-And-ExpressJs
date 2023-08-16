const mongoose = require('mongoose');

//Connecting NodeJs with MongoDB. StudentData is Database Name.
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

//Creating Schema.
const student = new mongoose.Schema({
    //We can apply validation to our schema.
    // name:{type:String,require:true},
    // emailId:{type: String },
    // address:{type:String},
    // workout:Boolean

    name:String,
    emailId:String,
    address:String,
    
});

//Creating Model.-> StudentDetails is collection name.
const studModel = new mongoose.model("StudentDetails",student);

const adder = async () => {

    //first way to insert data.
    // const ss = new studModel({
    //     name:"lav",
    //     emailId:"lav@gmail.com",
    //     address:"Silvassa"
    // });
    // await ss.save();

    //second way to insert data.
    // const data = await studModel.create({
    //     name:"Kush",
    //     emailId:"Kush@gmail.com",
    //     address:"Rakholi"
    // }); 

    //Read Data from MongoDB.
    // const read = await studModel.find();
    // console.log(read)

    //Reading Data Using Comparision Operator. This is just a example.
    // const operatorz = await studModel.find({height:{$eq:6}});->equal
    // const operatorz = await studModel.find({height:{$gt:5}});->greater than
    // const operatorz = await studModel.find({height:{$gte:7}});->Greater than equal to
    // const operatorz = await studModel.find({height:{$ls:3}});->Less Than
    // const operatorz = await studModel.find({height:{$in:[4,6]}});->In
    // const operatorz = await studModel.find({height:{$nin:[4,6]}});->Notin 
    // console.log(operatorz);

    //Update.
    // const updatez = await studModel.updateMany({name:"Kush"},{$set:{name:"Lav"}})
    // console.log(updatez);
}
adder();