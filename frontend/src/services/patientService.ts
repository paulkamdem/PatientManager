import axios from 'axios';

const API_URL = 'http://localhost:3000/patients';

export interface Patient {
  id: number;
  name: string;
  email: string;
}

export const getPatients = () => axios.get<Patient[]>(API_URL);
export const getPatient = (id: number) => axios.get<Patient>(`${API_URL}/${id}`);
export const createPatient = (user: Omit<Patient, 'id'>) => axios.post<Patient>(API_URL, user);
export const updatePatient = (id: number, user: Omit<Patient, 'id'>) => axios.put<Patient>(`${API_URL}/${id}`, user);
export const deletePatient = (id: number) => axios.delete(`${API_URL}/${id}`);
