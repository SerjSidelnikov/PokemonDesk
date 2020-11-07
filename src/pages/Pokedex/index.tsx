import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import classes from './Pokedex.module.scss';

const Pokedex: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />
      <Layout>Pokedex</Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
