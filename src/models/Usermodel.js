const mongoose= require("mongoose")
const Schemarules={
    name:{
        type:String,
        required:true,
    },
    adharnumbeer:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minLenght:[10,"legth should be atleast 10"],// [] make this to show your own error
    },
    confirmPassword:{
        type:String,
        required:true,
        // custom validation
        // [] make this to show your own error
        validate: [function(){
            return this.password==this.confirmPassword;
        },"password should be equal to confirmpassword"]
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
}
const Labourschema = new mongoose.Schema(Schemarules)
const LabourModel=mongoose.model("users",Labourschema)
module.exports=LabourModel;