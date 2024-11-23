const mongoose=require("mongoose")
const Schemarules={
    JobCategory:{
        type:String,
        required:true,
    },
    JobTitle:{
        type:String,
        required:true,
    },
    JobDescription:{
        type:String,
        required:true
    },
    HourlyWage:{
        type:Number,
        required:true,
 },
    LastDatetoApply:{
        type:Date,
        required:true,
  },
    Locations:{
        type:String,
        
    },
    RequiredSkills:{
        type:String
    },
    CreatedBy:{
        type:String
    }
}
const JobSchema = new mongoose.Schema(Schemarules)
const JobModel=mongoose.model("jobs",JobSchema)
module.exports=JobModel;