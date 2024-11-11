import { FC, PropsWithChildren } from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  title: string;
}

export const Page: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <Box
      sx={{
        paddingTop: '88px',
        paddingLeft: '24px',
        paddingBottom: '50px',
      }}>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontFamily: 'Inter Variable, sans-serif',
          fontWeight: 'bold',
          fontSize: '24px',
          color: '#2B2F32',
        }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};
