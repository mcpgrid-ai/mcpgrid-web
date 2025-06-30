import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { RoutePath } from '@common/constants';
import { IMAGES } from '@core/uikit';

export const HeaderLogo: FC = () => {
  const image = <Image width={24} height={24} src={IMAGES.LOGO.src} alt="" />;

  return (
    <div className="navbar-brand-box">
      <Link href={RoutePath.Index} className="logo logo-dark">
        <span className="logo-sm">{image}</span>
        <span className="logo-lg">
          {image}
          <span className="logo-txt">{process.env.PRODUCT_NAME}</span>
        </span>
      </Link>
      <Link href={RoutePath.Index} className="logo logo-light">
        <span className="logo-sm">{image}</span>
        <span className="logo-lg">
          {image}
          <span className="logo-txt">{process.env.PRODUCT_NAME}</span>
        </span>
      </Link>
    </div>
  );
};
