import { FC, PropsWithChildren } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { BackButton } from '@/components';

interface Props {
  title: string;
  showBackButton?: boolean;
}

export const Page: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  showBackButton,
}) => {
  return (
    <Box
      sx={{
        paddingTop: '88px',
        paddingLeft: '24px',
        paddingBottom: '50px',
      }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Box>
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
        </Box>
        {showBackButton && <BackButton />}
      </Stack>
      {children}
    </Box>
  );
};
