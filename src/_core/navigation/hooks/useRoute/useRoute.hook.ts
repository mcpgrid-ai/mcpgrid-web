'use client';

import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

export const useRoute = () => {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();

  return [{ pathname, segment }];
};
