const mongoose = require('mongoose');

const JobApplicationSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LabourModel', // Assuming Labour is your User model
        required: true,
    },
    jobID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'jobs', // Job model that holds the job details
        required: true,
    },
    appliedAt: {
        type: Date,
        default: Date.now,
    },
});

const JobApplicationModel = mongoose.model('JobApplication', JobApplicationSchema);
module.exports = JobApplicationModel;


// Job application handler (route)

// async function applyJob(req, res) {
//     try {
//         const userId = req.id; // The current user's ID
//         const jobId = req.params.jobId; // The job ID passed in the URL
        
//         // Check if the user has already applied to this job
//         const existingApplication = await JobApplicationModel.findOne({ userId, jobId });
        
//         if (existingApplication) {
//             return res.status(400).json({ message: "You have already applied to this job." });
//         }

//         // Create a new job application
//         const newApplication = new JobApplicationModel({
//             userId,
//             jobId,
//         });

//         await newApplication.save();
        
//         // Redirect the user to the profile page or show a success message
//         res.redirect('/profile');
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Something went wrong while applying for the job." });
//     }
// }


// const JobApplicationModel = require('./models/JobApplication'); // Import the Job Application Model
// const JobModel = require('./models/Job'); // Import the Job Model

// async function profilehandler(req, res) {
//     try {
//         // Fetch the user by their ID from the LabourModel
//         const user = await LabourModel.findOne({ _id: req.id });
        
//         if (!user) {
//             return res.status(404).json({
//                 message: "User not found",
//                 status: "failure"
//             });
//         }

//         // Step 1: Get all job applications for this user
//         const userApplications = await JobApplicationModel.find({ userId: req.id }).populate('jobId');

//         // Step 2: Extract jobIds that the user has applied to
//         const appliedJobs = userApplications.map(application => application.jobId);
        
//         // Step 3: Render the profile page with the jobs the user has applied to
//         res.render("profile", { user, jobs: appliedJobs, isAuthenticated: req.isAuthenticated });
        
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: error.message,
//             status: "failure in profile"
//         });
//     }
// }
