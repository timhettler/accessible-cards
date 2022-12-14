import React from 'react';
import classNames from 'classnames/bind';

import InstagramIcon from '../icons/instagram';
import LinkedInIcon from '../icons/linkedin';
import { VisuallyHidden } from '../VisuallyHidden';

import styles from "./Card.modules.scss";

const cx = classNames.bind(styles);

export const CardFinal = ({as, className, linkRef, ...rest}) => {
  const Element = as || 'div'
  return (
    <Element {...rest} className={cx('container', 'rce', 'ff', className)}>
      <img className={cx('image')} src="/Creative.png" alt="" />
      <div className={cx('text-container')}>
        <div className={cx('title')}> <a ref={linkRef} href="https://en.wikipedia.org/wiki/Graphic_design" aria-describedby="unique-link-id">Graphic Design</a></div>
        <div className={cx('description')}>These designers create solve problems with visual concepts, either with computer software or by hand.</div>
      </div>
      <div className={cx('interactive-group')}>
        <div className={cx('link')} aria-hidden="true" id="unique-link-id">Learn More <img className={cx('link__icon')} src="/chevron.svg" alt="" /></div>
        <ul className={cx('social')}>
          <li><a href="https://www.instagram.com/workandco/" target="_blank" rel="noreferrer">
            <VisuallyHidden>Instagram</VisuallyHidden>
            {InstagramIcon}
          </a></li>
          <li><a href="https://www.linkedin.com/company/work-&-co/" target="_blank" rel="noreferrer">
            <VisuallyHidden>Instagram</VisuallyHidden>
            {LinkedInIcon}
          </a></li>
        </ul>
      </div>
    </Element>
  )
};
