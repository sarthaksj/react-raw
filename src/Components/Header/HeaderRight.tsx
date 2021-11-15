import React from 'react';
import Link from 'next/link'
import classes from '../../Stylesheets/layouts/_header.module.scss';
import { REPO_URL } from '../../helpers/Conventions'

interface Props { }

const HeaderRight: React.FunctionComponent<Props> = () => {
  return (
    <div className={classes.header__right}>
      <Link href={REPO_URL}>
        <a>
          <i className="fa-brands fa-github" />
        </a>
      </Link>
    </div>
  );
};

export default HeaderRight;
