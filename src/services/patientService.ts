import { Patient } from "../models/Patient";
import { PrismaClient } from '@prisma/client';



/*
// In-memory patient list (replace with DB later)
export const patients: Patient[] = [
  { id: 1, name: 'Alice Example', email: 'alice@example.com' },
  { id: 2, name: 'Bob Sample', email: 'bob@example.com' }
];
*/
const prisma = new PrismaClient();


// Get all patients
/*
export const getAllPatients = (): Patient[] => {
  return patients;
};
*/
export const getAllPatients = async () => {
  return await prisma.patient.findMany();
};


// Get patient by ID
/*
export const getPatientById = (id: number): Patient | undefined => {
  return patients.find(patient => patient.id === id);
};
*/
export const getPatientById = async (id: number) => {
  return await prisma.patient.findUnique({ where: { id } });
};

// Create a new patient
/*
export const createPatient = (name: string, email: string): Patient => {
  const newPatient: Patient = {
    id: patients.length + 1,
    name,
    email
  };
  patients.push(newPatient);
  return newPatient;
};
*/
export const createPatient = async (name: string, email: string) => {
  return await prisma.patient.create({ data: { name, email } });
};

// Update patient
/*
export const updatePatient = (id: number, name: string, email: string): Patient | null => {
  const index = patients.findIndex(patient => patient.id === id);
  if (index === -1) return null;

  patients[index] = { id, name, email };
  return patients[index];
};
*/
export const updatePatient = async (id: number, name: string, email: string) => {
  return await prisma.patient.update({
    where: { id },
    data: { name, email }
  });
};

// Delete patient
/*
export const deletePatient = (id: number): boolean => {
  const index = patients.findIndex(patient => patient.id === id);
  if (index === -1) return false;

  patients.splice(index, 1);
  return true;
};
*/
export const deletePatient = async (id: number) => {
  return await prisma.patient.delete({ where: { id } });
};
