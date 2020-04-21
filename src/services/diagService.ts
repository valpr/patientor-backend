import diagList from '../../data/diagnoseList';
import { Diagnosis } from '../types';

const getAll = (): Diagnosis[]  => {
    return diagList;
};


export default {
    getAll
};