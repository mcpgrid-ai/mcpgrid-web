import { CSSProperties } from 'react';

export type ClsxSpacing = 'auto' | 0 | 1 | 2 | 3 | 4 | 5;

export type ClsxProps = Partial<{
  d: CSSProperties['display'];
  gap: ClsxSpacing;
  m: ClsxSpacing;
  mb: ClsxSpacing;
  mt: ClsxSpacing;
  mx: ClsxSpacing;
  my: ClsxSpacing;
}>;
