const LabourModel=require("../models/Usermodel");
const jwt=require("jsonwebtoken")
const util= require("util");
const promisify=util.promisify;
const promisedjwtsign=promisify(jwt.sign)
const promisedjwtverify=promisify(jwt.verify)
const cookieparser=require("cookie-parser");
const JobModel = require("../models/Jobmodel");
const JobApplicationModel=require("../models/jobApplymodel")
async function signuphandler(req,res) {
    try {
        const userobj=req.body
        if(!userobj.adharnumbeer || !userobj.password){
            return res.status(400).json({
                message:"required data missing",
                status:"failure"
            })
        }
        const user = await LabourModel.findOne({adharnumbeer:userobj.adharnumbeer});
        if(user){
            return res.status(400).json({
                message:"user is already loggedin",
                status:"failure"
            })
        }
        const newuser=await LabourModel.create(userobj);
        const authToken=await promisedjwtsign({id:newuser["_id"]},process.env.SECRET_KEY)
        res.cookie("jwt",authToken,{
            maxAge:1000*60*60*24,
            httpOnly:true,
        })
        // res.status(201).json({
        //     message:"user signedup sucessfully",
        //     user:newuser,
        //     status:"success"
        // })
        res.redirect("/LoginPage")
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status:"failure in sugnup"
        })
    }
}
async function loginhandler(req,res){
    try {
        const userobj=req.body;
       const name=userobj.username;
       const adharnumbeer=userobj.adharnumbeer;
        // console.log(userobj)
        const user=await LabourModel.findOne({adharnumbeer:adharnumbeer});
        
        // console.log("user has been found",user)
        if(!user){
            return res.status(404).json({
                message:"user not found",
                status:"failure"
            })
        }
        // if(password!=user.password){
        //     return res.status(404).json({
        //         message:"invalid email or password",
        //         status:"failure"
        //     })
        // }
        const authToken=await promisedjwtsign({id:user["_id"]},process.env.SECRET_KEY);
        // console.log(authToken)
        res.cookie("jwt",authToken,{
            maxAge:1000*60*60*24,
            httpOnly:true
        })
        // console.log("Generated JWT for user:", user["_id"]);
        // res.status(200).json({
        //     message:"logined succesfully",
        //     status:"success",
        //     user:user
        // })
        res.redirect("/")
       
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status:"failure in login"
        })
    }
}
async function protecdrouteMiddleware(req,res,next) {
    try {
        const token=req.cookies.jwt;
        // console.log(token)
        if(!token){
            // return res.status(404).json({
            //     message:"unauthorised access",
            //     status:"failure"
            // })
            return res.render("firstlogin")
            
        }
        const decrypttoken=await promisedjwtverify(token,process.env.SECRET_KEY);
        // console.log(decrypttoken)
        req.id=decrypttoken.id
        // console.log(req.id)
        next();
        
    
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status:"failure in protected route"
        })
    }
}
function checkAuth(req, res, next) {
    const token = req.cookies.jwt;
    if (token) {
        // If there's a token, the user is logged in
        req.isAuthenticated = true;
    } else {
        req.isAuthenticated = false;
    }
    next();
}
async function profilehandler(req,res) {
    try {
        // const userid=res.username;
        console.log("here 1")
        const user= await LabourModel.findOne({_id:req.id});
        console.log("here 2")
        if(!user){
            return res.status(404).json({
                message:"user not found",
                status:"failure"
            })
        }
        console.log("here 3")
        // return res.status(200).json({
        //     message: "User profile retrieved successfully",
        //     status: "success",
        //     data: user
        // });
        if(user.role==="Admin"){
            console.log("here 4 se upar")
            const adminname=user.name
            const jobs = await JobModel.find({ CreatedBy: adminname });
            console.log("here 4")
             return res.render("profile",{user,userRole: user.role === 'Admin',jobs,isAuthenticated: req.isAuthenticated })
        }
        else{
            //  const username=user.name
            //  const jobs = await JobModel.find({ CreatedBy: username });
     
//             // res.render("profile",{user,jobs,isAuthenticated: req.isAuthenticated })

//             // Step 1: Get all job applications for this user
        const appliedJobs = await JobApplicationModel.find({ userid: req.id }).populate('jobID').exec();
        console.log("here 5")
// //         // Step 2: Extract jobIds that the user has applied to
        //  const appliedJobs = userApplications.map(application => application.jobID);
        
// //         // Step 3: Render the profile page with the jobs the user has applied to
          return res.render("profile", { user,userRole: user.role === 'Admin', appliedJobs, isAuthenticated: req.isAuthenticated });
        
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status:"failure in profile"
        })
    }
}

async function logouthandler(req,res) {
    try {
        res.clearCookie('jwt',{path:"/"});
        // res.json({
        //     message:"logout successfullu",
        //     status:"success"
        // })
        res.redirect("/")
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status:"failure"
        })
    }
}

async function ApplyFormhandler(req,res) {
    const user= await LabourModel.findOne({_id:req.id});
    // console.log(user)
    if(!user){
        return res.status(404).json({
            message:"user not found",
            status:"failure"
        })
    }
    const userid=user.id;
    const jobID = req.body.jobID || req.query.jobID;
    
    const existingApplication = await JobApplicationModel.findOne({ userid, jobID });
        
            if (existingApplication) {
                return res.status(400).json({ message: "You have already applied to this job." });
            }
    
            // Create a new job application
            const newApplication = new JobApplicationModel({
                userid,
                jobID,
            });
    
            await newApplication.save();

             // Redirect the user to the profile page or show a success message
           res.redirect('profile');
        // res.render("ApplyForm",{user,isAuthenticated: req.isAuthenticated })
}
async function AddJobhandler(req,res) {
    try {
        const user= await LabourModel.findOne({_id:req.id});
        console.log(user)
        if(!user){
            return res.status(404).json({
                message:"user not found",
                status:"failure"
            })
        }
         
       
        const jobobj=req.body
        jobobj.CreatedBy=user.name;
        const newjob= await JobModel.create(jobobj)
        if (newjob) {
            console.log("Job created successfully");
            
            res.render("AddJob",{user:user})
        } else {
            console.log("Job not created");
            return res.status(400).json({
                message: "Job not created",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status:"failure in sugnup"
        })
    }
    
}
module.exports={signuphandler,loginhandler,protecdrouteMiddleware,profilehandler,logouthandler,checkAuth,ApplyFormhandler,AddJobhandler}