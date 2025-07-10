import { CSSProperties } from 'react';

export type ClsxSpacing = 'auto' | 0 | 1 | 2 | 3 | 4 | 5;

export type ClsxFlexGrowShrink = 1 | 2;

export type ClsxWidth = 25 | 50 | 75 | 'auto';

export type ClsxProps = Partial<{
  d: CSSProperties['display'];
  dMd: CSSProperties['display'];
  dSm: CSSProperties['display'];
  dLg: CSSProperties['display'];
  flexGrow: ClsxFlexGrowShrink;
  flexShrink: ClsxFlexGrowShrink;
  gap: ClsxSpacing;
  m: ClsxSpacing;
  mb: ClsxSpacing;
  ms: ClsxSpacing;
  mt: ClsxSpacing;
  mx: ClsxSpacing;
  my: ClsxSpacing;
  w: ClsxWidth;
}>;
