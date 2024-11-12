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
          color: 'colors.textSubtitle',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&:hover .MuiTypography-root, &:hover .MuiSvgIcon-root': {
            color: '#33C173',
          },
        }}>
        <Icon name="BackArrowIcon" />
        <Typography
          variant="subtitle1"
          component="span">
          Back
        </Typography>
      </Button>
    </Box>
  );
};
