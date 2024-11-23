const express= require("express")
const router = express.Router()
const hbs=require("hbs")
const LabourModel = require("../models/Jobmodel.js")


router.get("/", async (req,res)=>{
    const Latestjobs=await LabourModel.find({JobCategory:"Old Jobs"});
    const Currentjobs=await LabourModel.find({JobCategory:"Current Jobs"});
 const newjobs=await LabourModel.find({JobCategory:"CurrentOpenings"});
    
    
    res.render("index",{Latestjobs:Latestjobs,Currentjobs:Currentjobs,newjobs:newjobs,isAuthenticated:req.isAuthenticated})
})
router.get("/contact",(req,res)=>{
    res.render("contact", { isAuthenticated: req.isAuthenticated })
})
router.get("/captainBot",(req,res)=>{
    res.render("captainBot", { isAuthenticated: req.isAuthenticated })
})
router.get("/CreateProfile",(req,res)=>{
    res.render("CreateProfile", { isAuthenticated: req.isAuthenticated })
})

router.get('/Job_Description/:jobID', async (req, res) => {
    const jobID = req.params.jobID;
    console.log(jobID)
    try {
        // Fetch job data from the database based on jobID
        const jobData = await LabourModel.findOne({ "_id": jobID });
        console.log(jobData);
        if (!jobData) {
            return res.status(404).send('Job not found'); // Handle case where job is not found
        }

        // req.session.jobData = jobData;

        // Redirect to the Job Description page
        return res.redirect(`/Job_Description?jobID=${jobID}`);
     }
      catch (error) {
        console.error('Error fetching job data:', error);
        res.status(500).send('Error retrieving job data');
    }
});

router.get("/Job_Description", async(req,res)=>{
    
    const jobID = req.query.jobID;

    if (!jobID) {
        return res.status(404).send('No job data available'); // Handle case where job data is not in session
    }

    try {
        // Fetch job data from the database based on jobID
        const jobData = await LabourModel.findOne({ "_id": jobID });
        if (!jobData) {
            return res.status(404).send('Job not found'); // Handle case where job is not found
        }

        res.render("Job_Description", { jobData: jobData });
    } catch (error) {
        console.error('Error fetching job data:', error);
        res.status(500).send('Error retrieving job data');
    }
})
router.get("/LoginPage",(req,res)=>{
    res.render("LoginPage", { isAuthenticated: req.isAuthenticated })
})
// router.get("/profile",(req,res)=>{
//     res.render("profile")
// })
router.get("/signup",(req,res)=>{
    res.render("signup")
})
// router.get("/AddJob",(req,res)=>{
//     res.render("AddJob")
// })
// router.get("/ApplyForm",(req,res)=>{
//     res.render("ApplyForm", { isAuthenticated: req.isAuthenticated })
// })
router.get("/Notadmin", (req, res) => {
    res.render("Notadmin");  // Render a page to inform users they are not admins
});
module.exports=router