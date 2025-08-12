import { Router } from 'express';
import {
  getPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} from '../controllers/patientController';

const router = Router();

// GET /patients - Liste alle Patienten
router.get('/', getPatients);

//GET /patients/:id – Details eines Patienten
router.get('/:id', getPatientById);

// POST /patients – Neuen Patienten anlegen
router.post('/', createPatient);

// PUT /patients/:id – Patienten aktualisieren
router.put('/:id', updatePatient);

// DELETE /patients/:id – Patienten löschen
router.delete('/:id', deletePatient);

export default router;
