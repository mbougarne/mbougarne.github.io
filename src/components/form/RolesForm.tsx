import { FC } from 'react';
import { Box, Grid2 as Grid, Grow, Stack, Typography } from '@mui/material';

import {
  ActionButton,
  CustomRoleName,
  PermissionsButtonControl,
  PermissionsButtons,
  SelectRoleIcon,
} from './inputs';
import {
  permissionsButtonLargeLeft,
  permissionsButtonLargeRight,
  permissionsButtonLeft,
  permissionsButtonMiddle,
  permissionsButtonRight,
  permissionsLabel,
  textField,
  textFieldInput,
} from './styles';
import { useNavigate } from 'react-router-dom';

export const RolesForm: FC = () => {
  const navigate = useNavigate();

  const onCancelClicked = () => {
    navigate(-1);
  };

  return (
    <Box>
      <CustomRoleName
        sx={textField}
        slotSx={textFieldInput}
      />
      <SelectRoleIcon />
      <Box sx={{ marginTop: '24px', marginBottom: '12px' }}>
        <Typography
          variant="h2"
          component="h3"
          sx={{
            fontSize: '22px',
            color: 'colors.textHeadline',
          }}>
          Permissions
        </Typography>
      </Box>

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
                defaultValue="no"
                name="locks-permissions"
                title="Locks"
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value="no"
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value="view"
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value="edit"
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
                defaultValue="no"
                name="activate-lock-permissions"
                title="Activate Lock"
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="No"
                  value="no"
                  sx={permissionsButtonLargeLeft}
                />
                <PermissionsButtonControl
                  label="Yes"
                  value="yes"
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
                defaultValue="no"
                name="inventory-permissions"
                title="Inventory"
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value="no"
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value="view"
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value="edit"
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
                defaultValue="no"
                name="tenant-locks-permissions"
                title="Tenant Locks"
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value="no"
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value="view"
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value="edit"
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
                defaultValue="no"
                name="facilities-permissions"
                title="Facilities"
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value="no"
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value="view"
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value="edit"
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
                defaultValue="no"
                name="transfer-facilities-permissions"
                title="Transfer Facilities"
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="No"
                  value="no"
                  sx={permissionsButtonLargeLeft}
                />
                <PermissionsButtonControl
                  label="Yes"
                  value="yes"
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
                defaultValue="no"
                name="users-permissions"
                title="User"
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value="no"
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value="view"
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value="edit"
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
                defaultValue="no"
                name="edit-admins-permissions"
                title="Edit Admins"
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="No"
                  value="no"
                  sx={permissionsButtonLargeLeft}
                />
                <PermissionsButtonControl
                  label="Yes"
                  value="yes"
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
                defaultValue="no"
                name="subdomain-permissions"
                title="Subdomain"
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value="no"
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value="view"
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value="edit"
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
                defaultValue="no"
                name="api-settings-permissions"
                title="API"
                sx={permissionsLabel}>
                <PermissionsButtonControl
                  label="None"
                  value="no"
                  sx={permissionsButtonLeft}
                />
                <PermissionsButtonControl
                  label="View"
                  value="view"
                  sx={permissionsButtonMiddle}
                />
                <PermissionsButtonControl
                  label="Edit"
                  value="edit"
                  sx={permissionsButtonRight}
                />
              </PermissionsButtons>
            </Grid>
          </Grow>
        </Grid>
      </Box>
      {/* Submit / Cancel: Buttons */}
      <Grow
        in={true}
        timeout={750}>
        <Box
          sx={{
            marginTop: '64px',
          }}>
          <Stack
            spacing={3}
            direction="row">
            <ActionButton
              title="Cancel"
              onClickHandler={onCancelClicked}
            />
            <ActionButton title="Save Changes" />
          </Stack>
        </Box>
      </Grow>
    </Box>
  );
};
