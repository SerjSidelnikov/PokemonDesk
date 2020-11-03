import React from 'react';

import classes from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <main className={classes.main}>
      <div className={classes.container}>Main content</div>
    </main>
  );
};

export default Main;
