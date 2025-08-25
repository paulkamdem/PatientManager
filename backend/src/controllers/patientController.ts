import { Request, Response } from 'express';
//import { patients } from '../services/patientService';
import * as patientService from '../services/patientService'; 
import { Patient } from '../models/Patient';


/*
export const getPatients = (req: Request, res: Response) => {
  res.json(patients);
};
*/
export const getPatients = async (req: Request, res: Response) => {
  const patients = await patientService.getAllPatients();
  res.json(patients);
};



/*
export const getPatientById = (req: Request, res: Response) => {
  const patient = patients.find(u => u.id === parseInt(req.params.id));
  patient ? res.json(patient) : res.status(404).send('Patient not found');
};
*/
export const getPatientById = async (req: Request, res: Response) => {
  const patient = await patientService.getPatientById(parseInt(req.params.id));
  patient ? res.json(patient) : res.status(404).send('User not found');
};


/*
export const createPatient = (req: Request, res: Response) => {
  const newPatient = {
    id: patients.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  patients.push(newPatient);
  res.status(201).json(newPatient);
};
*/
export const createPatient = async (req: Request, res: Response) => {
  const patient = toPatient(req.body);
  const newUser = await patientService.createPatient(patient);
  res.status(201).json(newUser);
};

function toPatient(body: any): Patient {
  return {
    id: Number(body.id),
    name: String(body.name),
    email: String(body.email),
    age: body.age ?? null,
    gender: ['male', 'female', 'other', 'not_specified'].includes(body.gender) ? body.gender : 'not_specified',
    heightCm: body.heightCm != null ? Number(body.heightCm) : null,
    weightKg: body.weightKg != null ? Number(body.weightKg) : null,
    bloodType: ['A', 'B', 'AB', 'O', 'not_specified'].includes(body.bloodType) ? body.bloodType : 'not_specified',
    smoker: body.smoker === true,
    pregnant: body.pregnant === true
  };
}


/*
export const updatePatient = (req: Request, res: Response) => {
  const index = patients.findIndex(u => u.id === parseInt(req.params.id));
  if (index !== -1) {
    patients[index] = { id: patients[index].id, ...req.body };
    res.json(patients[index]);
  } else {
    res.status(404).send('Patient not found');
  }
};
*/
export const updatePatient = async (req: Request, res: Response) => {
   const patient = toPatient(req.body);
  const updatedUser = await patientService.updatePatient(parseInt(req.params.id), patient);
  res.json(updatedUser);
};


/*
export const deletePatient = (req: Request, res: Response) => {
  const index = patients.findIndex(u => u.id === parseInt(req.params.id));
  if (index !== -1) {
    patients.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Patient not found');
  }
};
*/
export const deletePatient = async (req: Request, res: Response) => {
  await patientService.deletePatient(parseInt(req.params.id));
  res.status(204).send();
};
