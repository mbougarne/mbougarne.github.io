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
        backgroundColor: 'colors.inActiveButtonBg',
        height: '58px',
        width: '375px',
        color: 'colors.textButton',
        '&:hover': {
          backgroundColor: 'colors.buttonBg',
          color: 'colors.white',
          boxShadow: 'none',
        },
      }}>
      <Typography
        variant="button"
        component="span"
        sx={{
          textTransform: 'capitalize',
        }}>
        {title}
      </Typography>
    </Button>
  );
};
