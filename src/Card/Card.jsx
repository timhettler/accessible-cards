import React from 'react';
import classNames from 'classnames/bind';

import styles from "./Card.modules.scss";

const cx = classNames.bind(styles);

export const Card = ({as, className, linkRef, ...rest}) => {
  const Element = as || 'div';

  return (
    <Element {...rest} className={cx('container', className)}>
      <img className={cx('image')} src="/Creative.png" alt="" />
      <div className={cx('text-container')}>
        <div className={cx('title')}>Graphic Design</div>
        <div className={cx('description')}>These designers create solve problems with visual concepts, either with computer software or by hand.</div>
      </div>
      <div className={cx('interactive-group')}>
        <a ref={linkRef} className={cx('link')} href="https://en.wikipedia.org/wiki/Graphic_design">Learn More <img className={cx('link__icon')} src="/chevron.svg" alt="" /></a>
      </div>
    </Element>
  )
};
