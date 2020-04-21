import { NewPatient, gender } from './types';
/* eslint-disable @typescript-eslint/no-explicit-any */
const isString = (text: any): text is string => {
    return typeof text ==='string' || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const isGender = (param: any): param is gender => {
    return Object.values(gender).includes(param);
};

const parseGender = (gender: any): gender => {
    if (!gender || !isGender(gender)){
        throw new Error('Incorrect or missing gender: '+gender);
    }    
    return gender;
};

const parseDate = (date: any): string => {
    if (!date || !isString(date) || !isDate(date)){
        throw new Error ('incorrect or missing date: '+date);
    }
    return date;
};

const parseStringProp = (prop: any, field: string): string => {
    if (!prop || !isString(prop)){
        throw new Error ('Incorrect or missing property: '+field);
    }   
    return prop;
};

const validatePatient = (object: any): NewPatient => {
    const patient: NewPatient = {
        name: parseStringProp(object.name,'name'),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseStringProp(object.ssn,'ssn'),
        gender: parseGender(object.gender),
        occupation: parseStringProp(object.occupation,'occupation')
    };
    return patient;
};

export default validatePatient;
