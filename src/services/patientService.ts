import PatientList from '../../data/patientList';
import {  Patient, ConfidentialPatient } from '../types';

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


export default {
    getAll,
    getConfidential
};