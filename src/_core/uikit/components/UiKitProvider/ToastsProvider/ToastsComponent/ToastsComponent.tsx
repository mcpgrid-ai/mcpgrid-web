import { CustomContentProps, useSnackbar } from 'notistack';
import { forwardRef } from 'react';
import BsToast from 'react-bootstrap/Toast';
import Image from 'next/image';

import { Box } from '../../../Box';
import { IMAGES } from '../../../../assets/images';

import { TOAST_VARIANT_MAPPING } from './ToastsComponent.const';

interface ToastsComponentProps extends CustomContentProps {
  name: string;
}

export const ToastsComponent = forwardRef<HTMLDivElement, ToastsComponentProps>(
  function ToastsComponent({ variant, message, id, name }, ref) {
    const { closeSnackbar } = useSnackbar();

    const handleOnClose = () => closeSnackbar(id);

    return (
      <BsToast
        ref={ref}
        bg={TOAST_VARIANT_MAPPING[variant]}
        onClose={handleOnClose}
      >
        <BsToast.Header>
          <Box flexGrow={1} d="flex">
            <Image
              src={IMAGES.LOGO}
              alt=""
              width={18}
              height={18}
              className="me-2"
            />
            <strong>{name}</strong>
          </Box>
        </BsToast.Header>
        <BsToast.Body>{message}</BsToast.Body>
      </BsToast>
    );
  },
);
