import React from 'react';
import { navigate } from 'hookrouter';

import Button from '../../components/Button';

import teamRocket from './assets/teamRocket.png';

import classes from './NotFound.module.scss';
import { LinkEnum } from '../../routes';

const NotFound: React.FC = () => {
  const handleBack = (): void => {
    navigate(LinkEnum.HOME);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <img src={teamRocket} alt="Team Rocket" />
        </div>

        <p className={classes.text}>
          The rocket team <span>has won this time.</span>
        </p>

        <Button onClick={handleBack} color="yellow" className={classes.button}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
