import { FC, useEffect, useState } from 'react';
import { IconButton, Snackbar, SnackbarContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface BaseProps {
  message: string;
  isError?: boolean;
}

export const Base: FC<BaseProps> = ({ message, isError = false }) => {
  const [open, setOpen] = useState(message !== '');

  const onClose = () => setOpen(false);

  useEffect(() => {
    setOpen(message !== '');
  }, [message]);

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{
        marginTop: '20px',
        maxWidth: '100%',
        width: '580px',
      }}>
      <SnackbarContent
        message={message}
        action={action}
        sx={{
          backgroundColor: isError ? 'error.main' : 'success.main',
          width: '580px',
          minHeight: '50px',
          fontWeight: 400,
          fontSize: '14px',
        }}
      />
    </Snackbar>
  );
};
