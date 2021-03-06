import express from 'express';
import PatientService from '../services/patientService';
import { validateEntry, validatePatient } from '../utils';

const router = express.Router();

router.get('/:id', (req,res) => {
    const id = req.params.id;
    const foundPatient = PatientService.getOne(id);
    if (foundPatient){
        res.send(foundPatient);
    }
    else{
        res.status(404).json({error: `404 ID not found`});
    }
});

router.post('/:id/entries', (req,res) => {
    try{
        const id = req.params.id;
        const newEntry = validateEntry(req.body);
        const addedEntry = PatientService.createEntry(id, newEntry);
        res.json(addedEntry);
    }
    catch (error) {
        res.status(400).json({error: `${error}`});
    }
});


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