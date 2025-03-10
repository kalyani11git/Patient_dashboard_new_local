const express = require("express");
const { patientRegister,patientLogin } = require("../controllers/authController");
const multer = require("multer");

const router = express.Router();

// Multer configuration for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/patientRegister", upload.array("patient_prevMedicalReports", 5), patientRegister);
router.post('/patientLogin',patientLogin)

module.exports = router;

