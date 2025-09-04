import { FC } from 'react';
import BsSpinner from 'react-bootstrap/Spinner';

import { Box } from '../../Box';

export const InfiniteScrollLoader: FC = () => {
  return (
    <Box d="flex" p={4} justifyContent="center">
      <BsSpinner variant="primary" animation="grow" />
    </Box>
  );
};
