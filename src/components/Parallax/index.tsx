import React from 'react';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

import classes from './Parallax.module.scss';

const Parallax: React.FC = () => {
  const [screenX, setScreenX] = React.useState<number>(0);
  const [screenY, setScreenY] = React.useState<number>(0);

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);

  return (
    <div className={classes.root}>
      <div
        className={classes.smallPokeBall}
        style={{ transform: `translate(${screenX * 0.01}px, ${screenY * 0.01}px)` }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div className={classes.cloud} style={{ transform: `translate(${screenX * 0.02}px, ${screenY * 0.02}px)` }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div className={classes.cloudBig} style={{ transform: `translate(${screenX * 0.03}px, ${screenY * 0.03}px)` }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>

      <div className={classes.pokeBall} style={{ transform: `translate(${screenX * 0.04}px, ${screenY * 0.04}px)` }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div className={classes.pikachu} style={{ transform: `translate(${screenX * 0.05}px, ${screenY * 0.05}px)` }}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
