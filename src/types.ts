export interface Diagnosis{
    code: string;
    name: string;
    latin?: string;
}

export enum gender {
    Male="male",
    Female="female",
    Other="other"
}

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: gender;
    occupation: string;
}

export type NewPatient =  Omit<Patient, 'id'>;

export type ConfidentialPatient =  Omit<Patient, 'ssn'>;