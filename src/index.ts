import express from 'express';
import cors from 'cors';
import diagRouter from './routes/diagnoses';
import patientRouter from './routes/patients';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req,res) => {
    console.log('ping received');
    res.send('pong');
});

app.use('/api/diagnoses', diagRouter);
app.use('/api/patients', patientRouter);

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});