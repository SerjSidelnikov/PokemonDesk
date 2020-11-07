import React from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

import classes from './Home.module.scss';

const Home: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/pokedex');
  };

  return (
    <div className={classes.root}>
      <Header />
      <Layout className={classes.main}>
        <div className={classes.contentText}>
          <Heading variant="h1" className={classes.title}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading variant="h2" className={classes.text}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button onClick={handleClick}>See pokemons</Button>
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
