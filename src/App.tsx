import React from 'react';
import cn from 'classnames';

import classes from './App.module.scss';

const App: React.FC = () => {
  return <div className={cn(classes.header, 'color')}>Yes, we Did It! This is App component!</div>;
};

export default App;
