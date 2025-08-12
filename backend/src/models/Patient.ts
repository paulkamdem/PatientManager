export interface Patient {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: 'male' | 'female' | 'other' | 'not_specified';
  heightCm?: number;
  weightKg?: number;
  bloodType: 'A' | 'B' | 'AB' | 'O' | 'not_specified';
  smoker?: boolean;
  pregnant?: boolean;
}