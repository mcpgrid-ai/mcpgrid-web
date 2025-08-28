import { BaseVariant } from 'notistack';
import { Color } from 'react-bootstrap/esm/types';

export const TOAST_VARIANT_MAPPING: Partial<Record<BaseVariant, Color>> = {
  error: 'danger',
  info: 'info',
  success: 'success',
  warning: 'warning',
};
