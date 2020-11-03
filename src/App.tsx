import React from 'react';

import classes from './App.module.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
