import PatientList from '../../data/patientList';
import {  NewPatient, Patient, ConfidentialPatient } from '../types';

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


export default {
    getAll,
    getConfidential,
    createPatient
};