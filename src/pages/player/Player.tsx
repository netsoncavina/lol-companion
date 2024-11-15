import React from 'react';
import Card from './components/Card';

function Player() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_48.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'blur(5px)',
          zIndex: -1,
        }}
      />

      <Card />
    </div>
  );
}

export default Player;
