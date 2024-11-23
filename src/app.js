const express= require("express")
const dotenv= require("dotenv")
const path=require("path")
const hbs=require("hbs")
const router=require("./routes/main.js")
const mongoose=require("mongoose")
const LabourModel = require("./models/Usermodel.js")
const JobModel=require("./models/Jobmodel.js")
dotenv.config();
const app=express();

const dblink=`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.xznlp.mongodb.net/DailyWage?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dblink).then(function(connection){
        console.log("connected sucesfully to db ")
    }).catch(err=>{
        console.log(err)
    })
// to add static files use express.static(staticpath)
const PORT=process.env.PORT || 3000;
// console.log(__dirname)  gives current file path---------C:\Users\HP\Desktop\Find the Workers  Model\src
// console.log(path.join(__dirname,"..")) gives -----C:\Users\HP\Desktop\Find the Workers  Model
// console.log(path.join(__dirname,"../public"))  gives --------C:\Users\HP\Desktop\Find the Workers  Model\public

const staticpath=path.join(__dirname,"../public")
//static files 
app.use(express.static(staticpath))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//dynamci files ----template engine
const temppath=path.join(__dirname,"../template/views")
app.set("view engine","hbs")
app.set("views",temppath)

const partialspath=path.join(__dirname,"../template/partials")
hbs.registerPartials(partialspath)
const cookieparser=require("cookie-parser")
app.use(cookieparser())

// const jobDataArray=require("./models/dataset.js")
// const jobDataArrayLatest=require("./models/dataset.js")
// const jobDataArrayCurrent=require("./models/dataset.js")

// const addMultipleJobData = async () => {
//     try {
//         const savedJobs = await JobModel.insertMany(jobDataArray);
//         console.log("Jobs added:", savedJobs);
//     } catch (error) {
//         console.error("Error adding jobs:", error);
//     } finally {
//         mongoose.connection.close(); // Close the connection
//     }
// };

// addMultipleJobData();

// const addMultipleLatestJobData = async () => {
//     try {
//         const savedJobs = await JobModel.insertMany(jobDataArrayLatest);
//         console.log("Latest jobs added:", savedJobs);
//     } catch (error) {
//         console.error("Error adding latest jobs:", error);
//     } finally {
//         mongoose.connection.close(); // Close the connection
//     }
// };

// addMultipleLatestJobData();

// const addMulipleCurrentJobData = async () => {
//     try {
//         const savedJobs = await JobModel.insertMany(jobDataArrayCurrent);
//         console.log("Latest jobs added:", savedJobs);
//     } catch (error) {
//         console.error("Error adding latest jobs:", error);
//     } finally {
//         mongoose.connection.close(); // Close the connection
//     }
// };



const {signuphandler, loginhandler,protecdrouteMiddleware,profilehandler,logouthandler,checkAuth,ApplyFormhandler,AddJobhandler}=require("./Controller/authcontroller.js")
app.use(checkAuth)

app.use(router)

app.post("/signup",signuphandler)
app.post("/LoginPage",loginhandler)

app.use(protecdrouteMiddleware)
app.get("/profile",profilehandler)
app.get("/logout",logouthandler)
app.get("/firstlogin")
app.get("/ApplyForm",(req,res)=>{
    const jobID = req.query.jobID;  // Ensure jobID comes from the URL query
    if (!jobID) {
        return res.status(400).json({ message: "Job ID is missing" });
    }
        res.render("ApplyForm", {jobID, isAuthenticated: req.isAuthenticated })
    })
app.post("/ApplyForm",ApplyFormhandler)
app.get("/AddJob",async(req,res)=>{
    const user= await LabourModel.findOne({_id:req.id});
        // console.log(user)
        if(!user){
            return res.status(404).json({
                message:"user not found",
                status:"failure"
            })
        }
   
    // If the user role is not "Admin", redirect them to the NotAdmin page
    if (user.role == "User") {
        // Redirect to the "NotAdmin" page if the user role is not "Admin"
        return res.render("Notadmin");  // Or use res.render("NotAdmin") to render the page directly
    }
    res.render("AddJob",{isAuthenticated: req.isAuthenticated})
})
app.post("/AddJob",AddJobhandler)


app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})