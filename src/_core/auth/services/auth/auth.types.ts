import { FirebaseOptions } from 'firebase/app';

export interface InitParams extends FirebaseOptions {
  clientEmail: string;
  privateKey: string;
}

export interface VerifyIdTokenParams {
  token: string;
}
