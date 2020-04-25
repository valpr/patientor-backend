import { NewPatient, Gender,BaseEntry, Entry } from './types';
/* eslint-disable @typescript-eslint/no-explicit-any */
const isString = (text: any): text is string => {
    return typeof text ==='string' || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
};

const parseGender = (gender: any): Gender => {
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

const isNumber = (num: any): num is number => {
    return typeof num ==='number' || num instanceof Number;
};


const parseNumProp = (prop: any, field: string): number => {
    if (!prop || !isNumber(prop)){
        throw new Error ('Incorrect or missing property: '+field);
    }   
    return prop;
}

const parseStringProp = (prop: any, field: string): string => {
    if (!prop || !isString(prop)){
        throw new Error ('Incorrect or missing property: '+field);
    }   
    return prop;
};

const parseEntries = (entries: any): Entry[] => {
    if (!entries){
        entries.forEach((entry: Entry) => {
            if (!entry.type || !isString(entry.type)){
                throw new Error ('Type missing or invalid');
            }
        });
    }
    return entries;
};

const isType = (entryType: string): Entry["type"] => {
    switch (entryType){
        case "OccupationalHealthcare":
            return "OccupationalHealthcare";
        case "HealthCheck":
            return "HealthCheck";
        case "Hospital":
            return "Hospital";
        default:
            throw new Error("Type missing or invalid");
    }
};

const parseEntryType = (object: any, base:BaseEntry): Entry => {
    const entryType = parseStringProp(object.type, "type");
    const type: Entry["type"] = isType(entryType);
    switch (type){
        case "HealthCheck":
            return {
                ...base,
                type: type,
                healthCheckRating:parseNumProp(object.healthCheckRating, 'HealthCheckRating') 
            };
        case "Hospital":
            return {
                ...base,
                type: type,
                discharge: {
                    date: parseStringProp(object.discharge.date, 'discharge date'),
                    criteria: parseStringProp(object.discharge.criteria, 'discharge criteria'),
                }
            };
        case "OccupationalHealthcare":
            return {
                ...base,
                type: type,
                employerName: parseStringProp(object.employerName, 'employerName'),
                sickLeave: object.sickLeave,
            };
    }

};

export const validatePatient = (object: any): NewPatient => {
    const patient: NewPatient = {
        name: parseStringProp(object.name,'name'),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseStringProp(object.ssn,'ssn'),
        gender: parseGender(object.gender),
        entries: parseEntries(object.entries),
        occupation: parseStringProp(object.occupation,'occupation')
    };
    return patient;
};

export const validateEntry = (object: any): Entry => {
    const id = Math.random()*100000;
    const entry: BaseEntry = {
        id : `${id}`,
        date: parseDate(object.date),
        diagnosisCodes: object.diagnosisCodes,
        specialist: parseStringProp(object.specialist, 'specialist'),
        description: parseStringProp(object.description, 'description'),
    };

    const modEntry: Entry = parseEntryType(object, entry);


    return modEntry;
};
