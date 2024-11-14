import { FC } from 'react';
import { Box, Grid2 as Grid, Grow } from '@mui/material';
import {
  AccessLevel,
  ICreateUserRole,
  IUpdateUserRole,
  PermissionType,
} from '@/types';

import {
  permissionsButtonLargeLeft,
  permissionsButtonLargeRight,
  permissionsButtonLeft,
  permissionsButtonMiddle,
  permissionsButtonRight,
  permissionsLabel,
} from '@/components/form/styles';

import { PermissionsButtonControl } from './ButtonControl';
import { PermissionsButtons } from './Buttons';

interface PermissionsContainerProps {
  values: ICreateUserRole | IUpdateUserRole;
  onPermissionChange: (id: PermissionType, level: string) => void;
}

export const PermissionsContainer: FC<PermissionsContainerProps> = ({
  onPermissionChange,
  values,
}) => {
  return (
    <>
      <Box>
        <Grid
          container
          spacing={4}>
          {/* Locks */}
          <Grow
            in={true}
            timeout={750}>
            <Grid>
              <PermissionsButtons
                defaultValue={AccessLevel.None}
                name="locks-permissions"
                title="Locks"
                value={values.permissions[0].accessLevel}
                onChange={(_, newValue) => {
                  onPermissionChange(PermissionType.Locks, newValue);
                }}
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value={AccessLevel.None}
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value={AccessLevel.Read}
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value={AccessLevel.Write}
                  sx={permissionsButtonRight}
                />
              </PermissionsButtons>
            </Grid>
          </Grow>
          {/* Activate Lock */}
          <Grow
            in={true}
            timeout={750}>
            <Grid>
              <PermissionsButtons
                defaultValue={AccessLevel.None}
                name="activate-lock-permissions"
                title="Activate Lock"
                value={values.permissions[1].accessLevel}
                onChange={(_, newValue) =>
                  onPermissionChange(PermissionType.ActivateLocks, newValue)
                }
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="No"
                  value={AccessLevel.None}
                  sx={permissionsButtonLargeLeft}
                />
                <PermissionsButtonControl
                  label="Yes"
                  value={AccessLevel.Write}
                  sx={permissionsButtonLargeRight}
                />
              </PermissionsButtons>
            </Grid>
          </Grow>
          {/* Inventory */}
          <Grow
            in={true}
            timeout={750}>
            <Grid>
              <PermissionsButtons
                defaultValue={AccessLevel.None}
                name="inventory-permissions"
                title="Inventory"
                value={values.permissions[2].accessLevel}
                onChange={(_, newValue) =>
                  onPermissionChange(PermissionType.Inventory, newValue)
                }
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value={AccessLevel.None}
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value={AccessLevel.Read}
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value={AccessLevel.Write}
                  sx={permissionsButtonRight}
                />
              </PermissionsButtons>
            </Grid>
          </Grow>
          {/* Tenant Lock */}
          <Grow
            in={true}
            timeout={750}>
            <Grid>
              <PermissionsButtons
                defaultValue={AccessLevel.None}
                name="tenant-locks-permissions"
                title="Tenant Locks"
                value={values.permissions[3].accessLevel}
                onChange={(_, newValue) =>
                  onPermissionChange(PermissionType.TenantLocks, newValue)
                }
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value={AccessLevel.None}
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value={AccessLevel.Read}
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value={AccessLevel.Write}
                  sx={permissionsButtonRight}
                />
              </PermissionsButtons>
            </Grid>
          </Grow>
          {/* Facilities */}
          <Grow
            in={true}
            timeout={750}>
            <Grid>
              <PermissionsButtons
                defaultValue={AccessLevel.None}
                name="facilities-permissions"
                title="Facilities"
                value={values.permissions[4].accessLevel}
                onChange={(_, newValue) =>
                  onPermissionChange(PermissionType.Facilities, newValue)
                }
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value={AccessLevel.None}
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value={AccessLevel.Read}
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value={AccessLevel.Write}
                  sx={permissionsButtonRight}
                />
              </PermissionsButtons>
            </Grid>
          </Grow>
          {/* Transfer Facility */}
          <Grow
            in={true}
            timeout={750}>
            <Grid>
              <PermissionsButtons
                defaultValue={AccessLevel.None}
                name="transfer-facilities-permissions"
                title="Transfer Facilities"
                value={values.permissions[5].accessLevel}
                onChange={(_, newValue) =>
                  onPermissionChange(
                    PermissionType.TransferFacilities,
                    newValue,
                  )
                }
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="No"
                  value={AccessLevel.None}
                  sx={permissionsButtonLargeLeft}
                />
                <PermissionsButtonControl
                  label="Yes"
                  value={AccessLevel.Write}
                  sx={permissionsButtonLargeRight}
                />
              </PermissionsButtons>
            </Grid>
          </Grow>
          {/* User */}
          <Grow
            in={true}
            timeout={750}>
            <Grid>
              <PermissionsButtons
                defaultValue={AccessLevel.None}
                name="users-permissions"
                title="User"
                value={values.permissions[6].accessLevel}
                onChange={(_, newValue) =>
                  onPermissionChange(PermissionType.Users, newValue)
                }
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value={AccessLevel.None}
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value={AccessLevel.Read}
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value={AccessLevel.Write}
                  sx={permissionsButtonRight}
                />
              </PermissionsButtons>
            </Grid>
          </Grow>
          {/* Edit Admins */}
          <Grow
            in={true}
            timeout={750}>
            <Grid>
              <PermissionsButtons
                defaultValue={AccessLevel.None}
                name="edit-admins-permissions"
                title="Edit Admins"
                value={values.permissions[7].accessLevel}
                onChange={(_, newValue) =>
                  onPermissionChange(PermissionType.EditAdmins, newValue)
                }
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="No"
                  value={AccessLevel.None}
                  sx={permissionsButtonLargeLeft}
                />
                <PermissionsButtonControl
                  label="Yes"
                  value={AccessLevel.Write}
                  sx={permissionsButtonLargeRight}
                />
              </PermissionsButtons>
            </Grid>
          </Grow>
          {/* Subdomains */}
          <Grow
            in={true}
            timeout={750}>
            <Grid>
              <PermissionsButtons
                defaultValue={AccessLevel.None}
                name="subdomain-permissions"
                title="Subdomain"
                value={values.permissions[8].accessLevel}
                onChange={(_, newValue) =>
                  onPermissionChange(PermissionType.Subdomains, newValue)
                }
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value={AccessLevel.None}
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value={AccessLevel.Read}
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value={AccessLevel.Write}
                  sx={permissionsButtonRight}
                />
              </PermissionsButtons>
            </Grid>
          </Grow>
          {/* API Settings */}
          <Grow
            in={true}
            timeout={750}>
            <Grid>
              <PermissionsButtons
                defaultValue={AccessLevel.None}
                name="api-settings-permissions"
                title="API"
                value={values.permissions[9].accessLevel}
                onChange={(_, newValue) =>
                  onPermissionChange(PermissionType.ApiSettings, newValue)
                }
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value={AccessLevel.None}
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value={AccessLevel.Read}
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value={AccessLevel.Write}
                  sx={permissionsButtonRight}
                />
              </PermissionsButtons>
            </Grid>
          </Grow>
        </Grid>
      </Box>
    </>
  );
};
