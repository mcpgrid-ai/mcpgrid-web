'use client';

import { FC } from 'react';
import Image from 'next/image';

import styles from './Testimonials.module.scss';

import { Carousel, Icon, Typography } from '@core/uikit';
import { DTO } from '@network/keystone';

export const Testimonials: FC<DTO.GetPageAuthQuery> = ({ testimonials }) => {
  return (
    <Carousel interval={5000} controls={false} className={styles.carousel}>
      {testimonials?.map(({ fullName, feedback, title, avatar }) => {
        return (
          <Carousel.Item key={fullName}>
            <div className="testi-contain text-white">
              <Icon.Bx
                name="solid-quote-alt-left"
                className="text-success display-6"
              />
              <Typography as="h4" className="mt-4 fw-medium lh-base text-white">
                “{feedback}”
              </Typography>
              <div className="mt-4 pt-3 pb-5">
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0">
                    {avatar?.publicUrlTransformed && (
                      <Image
                        src={avatar?.publicUrlTransformed}
                        width={100}
                        height={100}
                        alt={fullName || ''}
                        className="avatar-md img-fluid rounded-circle"
                      />
                    )}
                  </div>
                  <div className="flex-grow-1 ms-3 mb-4">
                    <h5 className="font-size-18 text-white">{fullName}</h5>
                    <p className="mb-0 text-white-50">{title}</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
