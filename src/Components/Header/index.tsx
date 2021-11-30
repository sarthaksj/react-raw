import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderMiddle from './HeaderMiddle';
import HeaderRight from './HeaderRight';
import classes from '../../Stylesheets/layouts/_header.module.scss';

interface Props { }

const Header: React.FunctionComponent<Props> = () => {
  return (
    <div className={classes.header__wrapper}>
      <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight />
    </div>
  );
};

export default Header;
