import { FC } from 'react';
import { Button, Typography } from '@mui/material';

interface ActionButtonProps {
  title: string;
  onClickHandler?: () => void;
}

export const ActionButton: FC<ActionButtonProps> = ({
  title,
  onClickHandler,
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClickHandler}
      sx={{
        boxShadow: 'none',
        backgroundColor: '#F2F4F5',
        height: '58px',
        width: '375px',
        color: '#5E6366',
        '&:hover': {
          backgroundColor: '#33C173',
          color: '#fff',
          boxShadow: 'none',
        },
      }}>
      <Typography
        variant="button"
        component="span"
        sx={{
          fontFamily: 'Inter Variable, sans-serif',
          fontWeight: 400,
          fontSize: '20px',
          textTransform: 'none',
        }}>
        {title}
      </Typography>
    </Button>
  );
};
