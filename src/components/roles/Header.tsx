import { FC, useState } from 'react';
import { CardHeader, IconButton, Typography } from '@mui/material';
import { Icon } from '@/components/icons';
import { DeleteRole } from './Delete';

export const RoleCardHeader: FC<{ isCustom: boolean; id: string }> = ({
  isCustom,
  id,
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <DeleteRole
        id={id}
        open={show}
        setOpen={setShow}
      />
      <CardHeader
        action={
          isCustom && (
            <>
              <IconButton
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
            {isCustom ? 'Custom Role' : 'Default Role'}
          </Typography>
        }
      />
    </>
  );
};
