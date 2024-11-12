import { FC } from 'react';
import { Box, Card } from '@mui/material';
import { Icon } from '@/components/icons';
import { RoleCardAction } from './Action';
import { useNavigate } from 'react-router-dom';

export const AddRoleCard: FC = () => {
  const navigate = useNavigate();

  const onAddRoleClicked = () => {
    navigate('add-role');
  };

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 303,
        minHeight: 378,
        borderRadius: '8px',
        backgroundColor: 'colors.addRoleBg',
        boxShadow: 'none',
        '&:hover': {
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        },
      }}>
      <Box
        sx={{
          display: 'block',
        }}>
        <Box
          sx={{
            textAlign: 'center',
            display: 'block',
          }}>
          <Icon
            name="AddRoleIcon"
            sx={{
              overflow: 'visible',
              marginLeft: '-25px',
            }}
          />
        </Box>
        <RoleCardAction
          title="Add Custom Role"
          onClickHandler={onAddRoleClicked}
        />
      </Box>
    </Card>
  );
};
