import React from 'react';

import classes from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={classes.container}>
        <p>
          Make with <span role="img">❤</span>️
        </p>
        <p>Ours Team</p>
      </div>
    </footer>
  );
};

export default Footer;
