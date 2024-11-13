import { FC } from 'react';
import { Button, Typography } from '@mui/material';

interface ActionButtonProps {
  title: string;
  onClickHandler?: () => void;
  type?: 'button' | 'reset' | 'submit';
  selected?: boolean;
  disabled?: boolean;
}

export const ActionButton: FC<ActionButtonProps> = ({
  title,
  onClickHandler,
  selected = false,
  disabled = false,
  type = 'button',
}) => {
  return (
    <Button
      type={type}
      variant="contained"
      onClick={onClickHandler}
      disabled={disabled}
      sx={{
        boxShadow: 'none',
        backgroundColor: selected
          ? 'colors.buttonBg'
          : 'colors.inActiveButtonBg',
        height: '58px',
        width: '375px',
        color: selected ? 'colors.white' : 'colors.textButton',
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
