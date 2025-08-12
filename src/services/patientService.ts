import { Patient } from "../models/Patient";


// In-memory patient list (replace with DB later)
export const patients: Patient[] = [
  { id: 1, name: 'Alice Example', email: 'alice@example.com' },
  { id: 2, name: 'Bob Sample', email: 'bob@example.com' }
];



// Get all patients
export const getAllPatients = (): Patient[] => {
  return patients;
};

// Get patient by ID
export const getPatientById = (id: number): Patient | undefined => {
  return patients.find(patient => patient.id === id);
};

// Create a new patient
export const createPatient = (name: string, email: string): Patient => {
  const newPatient: Patient = {
    id: patients.length + 1,
    name,
    email
  };
  patients.push(newPatient);
  return newPatient;
};

// Update patient
export const updatePatient = (id: number, name: string, email: string): Patient | null => {
  const index = patients.findIndex(patient => patient.id === id);
  if (index === -1) return null;

  patients[index] = { id, name, email };
  return patients[index];
};

// Delete patient
export const deletePatient = (id: number): boolean => {
  const index = patients.findIndex(patient => patient.id === id);
  if (index === -1) return false;

  patients.splice(index, 1);
  return true;
};
