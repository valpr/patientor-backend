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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry{
}

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: gender;
    occupation: string;
    entries: Entry[];
}

export type NewPatient =  Omit<Patient, 'id'>;

export type ConfidentialPatient =  Omit<Patient, 'ssn' | 'entries'>;