import { Card, CardBody, Text, Tooltip } from '@chakra-ui/react';

function PlayerCard() {
  return (
    <Card
      style={{
        height: '75vh',
        width: '35vw',
        padding: '20px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        borderRadius: '5px',
        backgroundImage:
          'url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_48.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <CardBody
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '100%',
          borderRadius: '5px',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          <Text fontSize='6xl' color={'white'}>
            VoidNoxian
          </Text>
        </div>
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          <Text fontSize='4xl' color={'white'}>
            Level 400
          </Text>
        </div>
        <img
          src='https://ddragon.leagueoflegends.com/cdn/14.12.1/img/champion/Draven.png'
          alt='Player Avatar'
          style={{ height: '150px', width: '150px', borderRadius: '50%' }}
        />
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          <Text fontSize='4xl' color={'white'}>
            Favorite Champions
          </Text>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <Tooltip label='Draven' aria-label='Draven'>
            <img
              src='https://ddragon.leagueoflegends.com/cdn/14.12.1/img/champion/Draven.png'
              alt='Player Avatar'
              style={{ height: '150px', width: '150px', borderRadius: '50%' }}
            />
          </Tooltip>
          <img
            src='https://ddragon.leagueoflegends.com/cdn/14.12.1/img/champion/Draven.png'
            alt='Player Avatar'
            style={{ height: '150px', width: '150px', borderRadius: '50%' }}
          />
          <img
            src='https://ddragon.leagueoflegends.com/cdn/14.12.1/img/champion/Draven.png'
            alt='Player Avatar'
            style={{ height: '150px', width: '150px', borderRadius: '50%' }}
          />
        </div>
      </CardBody>
    </Card>
  );
}

export default PlayerCard;
