import React from 'react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';

import classes from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />
      <Layout>not found</Layout>
      <Footer />
    </div>
  );
};

export default NotFound;
