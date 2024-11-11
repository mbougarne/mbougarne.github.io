import { FC, useEffect, useState } from 'react';
import { Box, LinearProgress } from '@mui/material';
import { Icon } from './icons';

export const AppLoader: FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <LinearProgress
        variant="determinate"
        sx={{
          height: 5,
          marginTop: '-7px',
          backgroundColor: '#33C173',
          '& .css-l16vtb-MuiLinearProgress-bar1': {
            backgroundColor: '#258D54',
          },
        }}
        value={progress}
      />
      <Box
        sx={{
          minHeight: 'calc(100vh - 14px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          name="MannaLogo"
          sx={{
            width: '64px',
            height: '64px',
            color: '#33C173',
            overflow: 'visible',
          }}
        />
      </Box>
    </Box>
  );
};