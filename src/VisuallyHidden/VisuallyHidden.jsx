import React from 'react';
import classNames from 'classnames/bind';

import styles from "./VisuallyHidden.modules.scss";

const cx = classNames.bind(styles);

export const VisuallyHidden = ({children}) => (<div className={cx('visually-hidden')}>{children}</div>);
