import express from 'express';
import patientRoutes from './routes/patientRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/patients', patientRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
