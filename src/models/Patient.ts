export interface Patient {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  heightCm?: number;
  weightKg?: number;
  bloodType?: 'A' | 'B' | 'AB' | 'O';
  smoker?: boolean;
  pregnant?: boolean;
}