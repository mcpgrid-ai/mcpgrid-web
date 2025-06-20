import { Metadata } from 'next';
import { FC } from 'react';

import { Button } from '@core/uikit';

interface FaqProps {
  searchParams: {
    v: string;
  };
}

const Faq: FC<FaqProps> = ({ searchParams }) => {
  return (
    <>
      {searchParams.v}
      <Button />
    </>
  );
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Blog',
    description: 'Read this blog post',
  };
};

export default Faq;
