import React from 'react';
import cn from 'classnames';

import './custom.css';
import classes from './App.modules.scss';

const App: React.FC = () => {
  return (
    <div className={cn(classes.header, 'color')}>
      Yes, we Did It! This is App component!
    </div>
  );
};

export default App;
