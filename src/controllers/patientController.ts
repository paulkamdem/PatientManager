import { Request, Response } from 'express';
import { patients } from '../services/patientService';

export const getPatients = (req: Request, res: Response) => {
  res.json(patients);
};

export const getPatientById = (req: Request, res: Response) => {
  const patient = patients.find(u => u.id === parseInt(req.params.id));
  patient ? res.json(patient) : res.status(404).send('Patient not found');
};

export const createPatient = (req: Request, res: Response) => {
  const newPatient = {
    id: patients.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  patients.push(newPatient);
  res.status(201).json(newPatient);
};

export const updatePatient = (req: Request, res: Response) => {
  const index = patients.findIndex(u => u.id === parseInt(req.params.id));
  if (index !== -1) {
    patients[index] = { id: patients[index].id, ...req.body };
    res.json(patients[index]);
  } else {
    res.status(404).send('Patient not found');
  }
};

export const deletePatient = (req: Request, res: Response) => {
  const index = patients.findIndex(u => u.id === parseInt(req.params.id));
  if (index !== -1) {
    patients.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Patient not found');
  }
};
