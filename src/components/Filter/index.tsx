import React from 'react';
import cn from 'classnames';

import classes from './Filter.module.scss';

const Filter: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleToggle = (): void => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <p className={classes.target} onClick={handleToggle}>
        Tipo
      </p>

      <div
        className={cn(classes.dropdown, {
          [classes.open]: open,
        })}>
        <ul className={classes.list}>
          <li>Fire</li>
          <li>Normal</li>
          <li>Electric</li>
          <li>Water</li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
