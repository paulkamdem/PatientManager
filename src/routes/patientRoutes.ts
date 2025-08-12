import { Router } from 'express';
import {
  getPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} from '../controllers/patientController';

const router = Router();

// GET /patients - list all patients
router.get('/', getPatients);

// GET /patients/:id - get patient by ID
router.get('/:id', getPatientById);

// POST /patients - create a new patient
router.post('/', createPatient);

// PUT /patients/:id - update a patient
router.put('/:id', updatePatient);

// DELETE /patients/:id - delete a patient
router.delete('/:id', deletePatient);

export default router;
