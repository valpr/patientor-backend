import express from 'express';
import diagService from '../services/diagService';

const router = express.Router();

router.get('/', (_req,res) => {
    res.send(diagService.getAll());
});


export default router;

