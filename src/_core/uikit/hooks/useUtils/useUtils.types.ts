import { BaseVariant } from 'notistack';

export interface ToastParams {
  variant?: BaseVariant;
  message: string;
  duration?: number | null;
}
