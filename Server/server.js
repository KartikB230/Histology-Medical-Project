import express, { json } from "express";
import { createConnection } from "mysql";
import cors from "cors";
import multer, { diskStorage } from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import connectDB from "./config/db.js";
import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Now you can use __dirname as you would in CommonJS modules



const app = express();
app.use(json());
app.use(cors());
connectDB();


const storage = diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const filename = req.body.filename ? req.body.filename : file.originalname;
        cb(null, filename);
    }
});

// Set up file upload middleware
const upload = multer({ storage: storage });
import { readdir } from 'fs';
import { INTEGER } from "sequelize";

// Endpoint for file uploads
app.post('/uploadfile', upload.single('myFile'), (req, res) => {
    console.log(req.file);
    res.send('File uploaded successfully!');
});

// Endpoint for file downloads
app.get('/downloadfile/:filename', cors(), function (req, res) {
    const fileName = req.params.filename;
    const file = join(__dirname, 'uploads', fileName);

    res.download(file, function (err) {
        if (err) {
            console.log('Error downloading file: ' + err);
        } else {
            console.log('File downloaded successfully.');
        }
    });
});

// Endpoint for listing all files in the uploads directory
app.get('/listfiles', cors(), function (req, res) {
    const directoryPath = join(__dirname, 'uploads');
    readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        res.send(files);
    });
});

const studentSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    cgpa: Number,
    jobsalary: Number,
    email: String,
    skills: String,
    backlog: String,
    batch: String,
    branch: String,
    locality: String,
    company: String,
    jobrole: String,
    bplace: String,
    mname: String,
});

const companyDetailSchema = new mongoose.Schema({
    // Define your schema fields here
    name: String,
    backhiring: String,
    location: String,
    jobprofile: String,
    skill: String
});

const CompanyDetail = mongoose.model('company_detail', companyDetailSchema);
const Student = mongoose.model('Student', studentSchema);

app.post("/login", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        // Check if there's a student with the provided PRN and password
        const students = await Student.findOne({ username, password });

        if (students) {
            // If student found, send success response
            res.send({ students });
        } else {
            // If not found, send error message
            res.send({ message: "Invalid username or password" });
        }
    } catch (error) {
        // If any error occurs, send error response
        console.error("Error:", error);
        res.send({ message: "Server Error" });
    }
});

app.post("/gpasort", async (req, res) => {
    try {
        const gpa = req.body.gpa;

        // Find students with a cgpa greater than the provided gpa
        const students = await Student.find({ cgpa: { $gt: gpa } }).sort({ cgpa: 1 });

        res.send(students);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

app.post("/dream", async (req, res) => {
    try {
        const char = req.body.char;

        // Define salary range conditions based on the value of `char`
        let minSalary, maxSalary;
        if (char === 'n') {
            minSalary = 0;
            maxSalary = 999999;
        } else if (char === 'd') {
            minSalary = 1000000;
            maxSalary = 1499999;
        } else if (char === 's') {
            minSalary = 1500000;
            maxSalary = 5000000;
        } else {
            res.status(400).send({ message: "Invalid category" });
            return;
        }

        // Find students with job salaries within the specified range
        const students = await Student.find({
            jobsalary: { $gt: minSalary, $lt: maxSalary }
        }).sort({jobsalary : 1});

        // Send the found students as response
        res.send(students);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Server Error" });
    }
});

app.post("/back", async (req, res) => {
    try {
        // Find company details where backhiring is 'Yes'
        const companies = await CompanyDetail.find({ backhiring: 'Yes' });

        // Send the found companies as response
        res.send(companies);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Error fetching data" });
    }
});

// Endpoint to match company skills with student skills
app.post("/adminskillmatch", async (req, res) => {
    try {
        const companyname = req.body.companyname;

        // Find students with skills matching the skills required by the company
        const result = await CompanyDetail.aggregate([
            {
                $match: { companyname: companyname } // Filter by company name
            },
            {
                $lookup: {
                    from: "students", // Collection name for students
                    localField: "skill", // Field in company_detail collection
                    foreignField: "skills", // Field in students collection
                    as: "matchedStudents" // Output array field name
                }
            },
            {
                $unwind: "$matchedStudents" // Unwind the matchedStudents array
            },
            {
                $project: { // Project fields from the matched students
                    _id: "$matchedStudents._id",
                    name: "$matchedStudents.name",
                    prn: "$matchedStudents.prn",
                    batch: "$matchedStudents.batch",
                    jobprofile: "$matchedStudents.jobrole",
                    skills: "$matchedStudents.skills",
                    // Add more fields as needed
                }
            }
        ]);
        res.send(result);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Server Error" });
    }
});

app.post("/studentskillmatch", async (req, res) => {
    try {
        const prn = req.body.prn;

        // Find the student by PRN
        const student = await Student.findOne({ prn });

        if (!student) {
            return res.status(404).send({ message: "Student not found" });
        }

        // Find companies with skills matching the student's skills
        const matchedCompanies = await CompanyDetail.find({ skill: { $in: student.skills } });

        res.send(matchedCompanies);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Server Error" });
    }
});

app.post("/dash", async (req, res) => {
    try {
        const prn = req.body.prn;
        
        // Find the student with the provided PRN
        const student = await Student.findOne({ prn });

        if (student) {
            // If student found, send the student data
            res.send(student);
        } else {
            // If student not found, send an error message
            res.status(404).send({ message: "Student not found" });
        }
    } catch (error) {
        // If any error occurs, send an error response
        console.error("Error:", error);
        res.status(500).send({ message: "Server Error" });
    }
});

app.post("/backstud", async (req, res) => {
    try {
        const prn = req.body.prn;
        const student = await Student.findOne({ prn, backlog: "Yes" });
        if (student) {
            const companies = await CompanyDetail.find({ backhiring: 'Yes' });
            res.send(companies);
        } else {
            // If student doesn't have backlogs, send an empty array
            res.send([]);
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Error fetching data" });
    }
})

app.post("/fpass", async (req, res) => {
    const { email, bplace, mname } = req.body;

    try {
        // Find a student document that matches the provided email, bplace, and mname
        const student = await Student.findOne({ email, bplace, mname });

        if (student) {
            res.send({ success: true, name: student.name });
        } else {
            res.send({ success: false, message: "Wrong email or answers to security questions!" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: "Database error" });
    }
});

app.post("/resetpass", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Update the password for the student with the provided email
        const updatedStudent = await Student.findOneAndUpdate({ email }, { password }, { new: true });

        if (updatedStudent) {
            res.send({ message: "Password updated successfully!" });
        } else {
            res.status(404).send({ message: "Student not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: "Database error" });
    }
});


// Enable CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(3001, () => {
    console.log("running backend server");
})