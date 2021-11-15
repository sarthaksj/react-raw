import React from 'react';
import classes from '../../Stylesheets/layouts/_header.module.scss';

interface Props { }

const HeaderMiddle: React.FunctionComponent<Props> = () => {
  return (
    <div className={classes.header__middle}></div>
  )
};

export default HeaderMiddle;
