import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import classes from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />
      <Layout className={classes.main}>
        <div className={classes.contentText}>
          <h1>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => {}}>See pokemons</Button>
        </div>
        <div className={classes.contentParallax}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
