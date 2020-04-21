import express from 'express';
import PatientService from '../services/patientService';
import validatePatient from '../utils';

const router = express.Router();

router.get('/', (_req,res) => {
    res.send(PatientService.getConfidential());
});

router.post('/', (req,res) => {
    try{
        const newPatient = validatePatient(req.body);
        const addedPatient = PatientService.createPatient(newPatient);
        res.json(addedPatient);
    }
    catch (error) {
        res.status(400).json({error: `${error}`});
    }

});



export default router;