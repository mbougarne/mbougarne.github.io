import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Icon } from './icons';
import { useNavigate } from 'react-router-dom';

export const BackButton: FC = () => {
  const navigate = useNavigate();

  const onBackClicked = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyItems: 'center',
        justifyContent: 'right',
        paddingRight: '24px',
      }}>
      <Button
        variant="text"
        onClick={onBackClicked}
        sx={{
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&:hover .css-aidjpe-MuiTypography-root, &:hover .css-jusfqj-MuiSvgIcon-root':
            {
              color: '#33C173',
            },
        }}>
        <Icon
          name="BackArrowIcon"
          sx={{ color: '#83898C' }}
        />
        <Typography
          variant="caption"
          component="span"
          sx={{
            fontFamily: 'Inter Variable, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            color: '#83898C',
          }}>
          Back
        </Typography>
      </Button>
    </Box>
  );
};
