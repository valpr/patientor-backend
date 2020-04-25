import PatientList from '../../data/patientList';
import {  NewPatient, Patient, ConfidentialPatient, Entry } from '../types';


const getOne = (id: string): Patient | undefined => {
    return PatientList.find((patient) => id === patient.id);
};

const getAll = (): Patient[] => {
    return PatientList;
};

const getConfidential = (): ConfidentialPatient[] =>{
    return PatientList.map(({ id, name, dateOfBirth, gender, occupation }) => ({    
        id,    
        name,    
        dateOfBirth,    
        gender,
        occupation  
    }));
};

const createPatient = (potential: NewPatient ): Patient => {
    const randID = Math.floor(Math.random()*100000);
    const newPatient: Patient = {
        id: `${randID}`,
        ...potential
    };
    PatientList.push(newPatient);
    return newPatient;
};

const createEntry = (id: string,newEntry: Entry): Entry => {
    
    PatientList.map(
        (patient) => id === patient.id ? 
        patient.entries.push(newEntry): 
        patient);

    return newEntry;
};


export default {
    getAll,
    getConfidential,
    createPatient,
    getOne,
    createEntry
};