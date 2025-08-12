import { Request, Response } from 'express';
//import { patients } from '../services/patientService';
import * as patientService from '../services/patientService'; 


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
  const { name, email } = req.body;
  const newUser = await patientService.createPatient(name, email);
  res.status(201).json(newUser);
};


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
  const { name, email } = req.body;
  const updatedUser = await patientService.updatePatient(parseInt(req.params.id), name, email);
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
