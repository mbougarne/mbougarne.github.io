import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Page } from '@/pages/Page';
import { Form as RoleForm } from '@/components/form';
import { AccessLevel, IPermission, PermissionType } from '@/types';

interface UserFormProps {
  name: string;
  roleIcon: number;
  permissions: IPermission[];
}

const initialState: UserFormProps = {
  name: '',
  roleIcon: 0,
  permissions: [
    { id: PermissionType.Locks, accessLevel: AccessLevel.None },
    { id: PermissionType.ActivateLocks, accessLevel: AccessLevel.None },
    { id: PermissionType.Inventory, accessLevel: AccessLevel.None },
    { id: PermissionType.TenantLocks, accessLevel: AccessLevel.None },
    { id: PermissionType.Facilities, accessLevel: AccessLevel.None },
    { id: PermissionType.TransferFacilities, accessLevel: AccessLevel.None },
    { id: PermissionType.Users, accessLevel: AccessLevel.None },
    { id: PermissionType.EditAdmins, accessLevel: AccessLevel.None },
    { id: PermissionType.Subdomains, accessLevel: AccessLevel.None },
    { id: PermissionType.ApiSettings, accessLevel: AccessLevel.None },
  ],
};

export const AddRole: FC = () => {
  return (
    <Page
      title="Create Custom Role"
      showBackButton={true}>
      <Box
        sx={{
          marginTop: '24px',
        }}>
        <Typography
          variant="h3"
          component="p"
          sx={{
            color: 'colors.textSubtitle',
            marginBottom: '24px',
          }}>
          Configure general information and permissions below. Don’t forget to
          save the Custom Role.
        </Typography>
        <RoleForm
          initialState={initialState}
          endpoint="AddRole"
        />
      </Box>
    </Page>
  );
};
