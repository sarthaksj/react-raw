import React from 'react';
import Link from 'next/link'
import { HEADER_TITLE } from '../../helpers/Conventions';
import classes from '../../Stylesheets/layouts/_header.module.scss';

interface Props { }

const HeaderLeft: React.FunctionComponent<Props> = ({ }) => {
  return (
    <div className={classes.header__left}>
      <Link href={'/'}>
        <a className={classes.Sidebar__row} style={{ textDecoration: 'none' }}>
          <div>
            <h4 className={classes.header__heading}>{HEADER_TITLE}</h4>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default HeaderLeft;
