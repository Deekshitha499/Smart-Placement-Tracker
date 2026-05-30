const express = require("express");

const multer = require("multer");

const pdfParse = require("pdf-parse");

const fs = require("fs");

const path = require("path");



const router = express.Router();



/* STORAGE */

const uploadPath = path.join(

  __dirname,

  "../uploads"

);



if (!fs.existsSync(uploadPath)) {

  fs.mkdirSync(uploadPath);

}



const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, uploadPath);

  },



  filename: function (req, file, cb) {

    cb(

      null,

      Date.now() + "-" + file.originalname

    );

  }

});



const upload = multer({ storage });



/* ATS ROUTE */

router.post(

  "/check-resume",

  upload.single("resume"),

  async (req, res) => {

    try {

      if (!req.file) {

        return res.status(400).json({

          message: "No file uploaded"

        });

      }



      const dataBuffer = fs.readFileSync(

        req.file.path

      );



      const pdfData = await pdfParse(dataBuffer);



      const text = pdfData.text.toLowerCase();



      /* SKILLS DATABASE */

      const skillsDatabase = [

        "java",

        "python",

        "c",

        "c++",

        "javascript",

        "typescript",

        "react",

        "node",

        "express",

        "mongodb",

        "mysql",

        "sql",

        "html",

        "css",

        "tailwind",

        "aws",

        "docker",

        "kubernetes",

        "git",

        "github",

        "machine learning",

        "ai",

        "data science",

        "figma",

        "firebase",

        "communication",

        "leadership",

        "teamwork"

      ];



      /* DETECT SKILLS */

      let matchedSkills = [];



      skillsDatabase.forEach((skill) => {

        if (text.includes(skill)) {

          matchedSkills.push(skill);

        }

      });



      /* DETECT SECTIONS */

      const sections = {

        education:

          text.includes("education"),



        projects:

          text.includes("project"),



        internship:

          text.includes("internship"),



        experience:

          text.includes("experience"),



        certifications:

          text.includes("certification"),



        achievements:

          text.includes("achievement"),



        github:

          text.includes("github"),



        linkedin:

          text.includes("linkedin"),

      };



      /* ATS SCORE */

      let atsScore = 0;



      atsScore += matchedSkills.length * 3;



      if (sections.education)

        atsScore += 10;



      if (sections.projects)

        atsScore += 20;



      if (sections.internship)

        atsScore += 15;



      if (sections.experience)

        atsScore += 10;



      if (sections.certifications)

        atsScore += 10;



      if (sections.achievements)

        atsScore += 10;



      if (sections.github)

        atsScore += 5;



      if (sections.linkedin)

        atsScore += 5;



      /* RESUME LENGTH */

      if (text.length > 3000) {

        atsScore += 10;

      }



      if (atsScore > 100) {

        atsScore = 100;

      }



      /* MISSING PARAMETERS */

      let missingSkills = [];



      if (!sections.projects) {

        missingSkills.push(

          "Projects Section"

        );

      }



      if (!sections.internship) {

        missingSkills.push(

          "Internship Experience"

        );

      }



      if (!sections.certifications) {

        missingSkills.push(

          "Certifications"

        );

      }



      if (!sections.github) {

        missingSkills.push(

          "GitHub Profile"

        );

      }



      if (!sections.linkedin) {

        missingSkills.push(

          "LinkedIn Profile"

        );

      }



      if (matchedSkills.length < 5) {

        missingSkills.push(

          "More Technical Skills"

        );

      }



      /* SUGGESTIONS */

      let suggestions = [];



      if (!sections.projects) {

        suggestions.push(

          "Add strong projects with technologies used"

        );

      }



      if (!sections.internship) {

        suggestions.push(

          "Add internship or real-world experience"

        );

      }



      if (!sections.certifications) {

        suggestions.push(

          "Add certifications from Coursera/Udemy"

        );

      }



      if (!sections.github) {

        suggestions.push(

          "Add GitHub profile link"

        );

      }



      if (!sections.linkedin) {

        suggestions.push(

          "Add LinkedIn profile link"

        );

      }



      if (matchedSkills.length < 5) {

        suggestions.push(

          "Add more technical skills relevant to your domain"

        );

      }



      if (text.length < 1500) {

        suggestions.push(

          "Resume content is too short. Add more details."

        );

      }



      res.json({

        atsScore,

        matchedSkills,

        missingSkills,

        suggestions,

        sections

      });

    }

    catch (error) {

      console.log("ATS ERROR:", error);



      res.status(500).json({

        message: error.message

      });

    }

  }

);



module.exports = router;