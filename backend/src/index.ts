import express from 'express';
import patientRoutes from './routes/patientRoutes';
import {errorHandler} from './middlewares/errorHandler';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/patients', patientRoutes);

//handle error
app.get('/error-test', (req, res) => {
  throw new Error('This is a api call error');
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
