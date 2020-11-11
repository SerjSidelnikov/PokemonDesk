import React from 'react';

import Layout from '../../components/Layout';

import classes from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={classes.root}>
      <Layout>not found</Layout>
    </div>
  );
};

export default NotFound;
