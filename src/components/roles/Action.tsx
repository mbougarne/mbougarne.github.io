import { FC } from 'react';
import { Box, Button, CardActions, Typography } from '@mui/material';

interface RoleCardActionProps {
  title: string;
  onClickHandler?: () => void;
}

export const RoleCardAction: FC<RoleCardActionProps> = ({
  title,
  onClickHandler,
}) => {
  return (
    <Box
      sx={{
        marginTop: '38px',
      }}>
      <CardActions>
        <Button
          size="small"
          component="a"
          onClick={onClickHandler}
          sx={{
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}>
          <Typography
            variant="body1"
            component="h4"
            sx={{
              fontFamily: 'Inter Variable, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              textAlign: 'center',
              color: '#33C173',
              textDecoration: 'underline',
            }}>
            {title}
          </Typography>
        </Button>
      </CardActions>
    </Box>
  );
};
