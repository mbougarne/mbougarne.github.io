import { FC, useState } from 'react';
import { CardHeader, IconButton, Typography } from '@mui/material';
import { Icon } from '@/components/icons';
import { DeleteRole } from './Delete';
import { IUserRole } from '@/types';
import { useNavigate } from 'react-router-dom';

export const RoleCardHeader: FC<{ role: IUserRole }> = ({ role }) => {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

  const onEdit = () => {
    navigate('edit-role', {
      state: {
        form: {
          id: role.id,
          name: role.name,
          roleIcon: role.roleIcon + 1,
          permissions: role.permissions,
        },
      },
    });
  };

  return (
    <>
      <DeleteRole
        id={role.id}
        open={show}
        setOpen={setShow}
      />
      <CardHeader
        sx={{
          minHeight: '70px',
        }}
        action={
          role.isCustom && (
            <>
              <IconButton
                onClick={onEdit}
                aria-label="edit role"
                sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                <Icon
                  name="EditIcon"
                  sx={{ color: 'colors.textButtonCard' }}
                />
              </IconButton>
              <IconButton
                onClick={() => setShow(true)}
                aria-label="delete role"
                sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                <Icon
                  name="DeleteIcon"
                  sx={{ color: 'colors.textButtonCard' }}
                />
              </IconButton>
            </>
          )
        }
        title={
          <Typography
            variant="subtitle2"
            sx={{ color: 'colors.textBody' }}>
            {role.isCustom ? 'Custom Role' : 'Default Role'}
          </Typography>
        }
      />
    </>
  );
};
