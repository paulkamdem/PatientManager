export interface Patient {

  name: string;
  email: string;
  age?: number | null;
  gender: 'male' | 'female' | 'other' | 'not_specified';
  heightCm?: number | null;
  weightKg?: number | null;
  bloodType: 'A' | 'B' | 'AB' | 'O';
  smoker: boolean;
  pregnant: boolean;
}