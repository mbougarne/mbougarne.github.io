import { FC } from 'react';
import { Box, Grid2 as Grid, Stack, Typography } from '@mui/material';

import {
  ActionButton,
  CustomRoleName,
  PermissionsButtonControl,
  PermissionsButtons,
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
      <Box sx={{ marginTop: '24px', marginBottom: '16px' }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontFamily: 'Inter Variable, sans-serif',
            fontWeight: 'bold',
            fontSize: '22px',
            color: '#2B2F32',
          }}>
          Permissions
        </Typography>
      </Box>

      <Box>
        <Grid
          container
          spacing={4}>
          {/* Locks */}
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
          {/* Activate Lock */}
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
          {/* Inventory */}
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
          {/* Tenant Lock */}
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
          {/* Facilities */}
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
          {/* Transfer Facility */}
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
          {/* User */}
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
          {/* Edit Admins */}
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
          {/* Subdomains */}
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
          {/* API Settings */}
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
        </Grid>
      </Box>
      {/* Submit / Cancel: Buttons */}
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
    </Box>
  );
};
