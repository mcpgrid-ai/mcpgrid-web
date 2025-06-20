import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { AppRoutePath } from '@app/common';
import { IMAGES } from '@core/uikit';

export const HeaderLogo: FC = () => {
  return (
    <div className="navbar-brand-box">
      <Link href={AppRoutePath.Index} className="logo logo-dark">
        <span className="logo-sm">
          <Image {...IMAGES.LOGO} alt="" />
        </span>
        <span className="logo-lg">
          <Image {...IMAGES.LOGO} alt="" />
          <span className="logo-txt">Mcpbox</span>
        </span>
      </Link>
      <Link href={AppRoutePath.Index} className="logo logo-light">
        <span className="logo-sm">
          <Image {...IMAGES.LOGO} alt="" />
        </span>
        <span className="logo-lg">
          <Image {...IMAGES.LOGO} alt="" />
          <span className="logo-txt">Mcpbox</span>
        </span>
      </Link>
    </div>
  );
};
