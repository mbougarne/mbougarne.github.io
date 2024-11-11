import { FC, ReactElement } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2 as Grid,
  InputLabel,
  Radio,
  RadioGroup,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import SelectRolIcon, { IconContainerProps } from '@mui/material/Rating';
import { Page } from '@/pages/Page';
import { Icon } from '@/components';

const StyledRating = styled(SelectRolIcon)(() => ({
  '& .MuiRating-icon .MuiSvgIcon-root': {
    color: '#33C173',
    overflow: 'visible',
    fontSize: '14px',
    marginRight: '12px',
  },
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: '#ABAFB1',
    fontSize: '14px',
    marginRight: '12px',
  },
  '& .css-hlbajn-MuiRating-label': {
    display: 'block',
    width: '44px',
    height: '44px',
    marginRight: '10px',
  },
}));

interface CustomIconsProps {
  [index: number]: {
    icon: ReactElement<unknown>;
    label: string;
  };
}

const customIcons: CustomIconsProps = {
  1: {
    icon: <Icon name="AdminIcon" />,
    label: 'Admin',
  },
  2: {
    icon: <Icon name="PersonnelIcon" />,
    label: 'Personnel',
  },
  3: {
    icon: <Icon name="AdminLockIcon" />,
    label: 'Admin Lock',
  },
  4: {
    icon: <Icon name="VendorIcon" />,
    label: 'Vendor',
  },
  5: {
    icon: <Icon name="CallCenterAgentIcon" />,
    label: 'Call Center Agent',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export const AddRole: FC = () => {
  const isError = false;
  return (
    <Page
      title="Create Custom Role"
      showBackButton={true}>
      <Box
        sx={{
          marginTop: '24px',
        }}>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontFamily: 'Inter Variable, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            color: '#83898C',
          }}>
          Configure general information and permissions below. Don’t forget to
          save the Custom Role.
        </Typography>
        <Box>
          <Box>
            <InputLabel htmlFor="custom-role-name-input">
              Custom Role Name
            </InputLabel>
            <TextField
              id="custom-role-name-input"
              placeholder="Input Custom Role Name"
              autoFocus={true}
              required={true}
              error={isError}
              helperText={isError && 'Something went wrong...'}
            />
          </Box>

          <Box>
            <InputLabel htmlFor="select-role-icon">Select Role Icon</InputLabel>
            <StyledRating
              name="role-icon"
              defaultValue={2}
              IconContainerComponent={IconContainer}
              getLabelText={(value: number) => customIcons[value].label}
              highlightSelectedOnly
            />
          </Box>
          <Box>
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
              spacing="24px">
              {/* Locks */}
              <Grid>
                <FormControl>
                  <FormLabel
                    id="locks-permissions"
                    sx={{
                      fontFamily: 'Inter Variable, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      color: '#5E6366',
                    }}>
                    Locks
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="locks-permissions"
                    defaultValue="no"
                    name="locks-permissions"
                    defaultChecked
                    row>
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="None"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="view"
                      control={<Radio />}
                      label="View"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="edit"
                      control={<Radio />}
                      label="Edit"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* Activate Lock */}
              <Grid>
                <FormControl>
                  <FormLabel
                    id="activate-lock-permissions"
                    sx={{
                      fontFamily: 'Inter Variable, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      color: '#5E6366',
                    }}>
                    Activate Lock
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="activate-lock-permissions"
                    defaultValue="no"
                    name="activate-lock-permissions"
                    defaultChecked
                    row>
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '265px',
                        height: '44px',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '265px',
                        height: '44px',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* Inventory */}
              <Grid>
                <FormControl>
                  <FormLabel
                    id="inventory-permissions"
                    sx={{
                      fontFamily: 'Inter Variable, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      color: '#5E6366',
                    }}>
                    Inventory
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="inventory-permissions"
                    defaultValue="no"
                    name="inventory-permissions"
                    defaultChecked
                    row>
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="None"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="view"
                      control={<Radio />}
                      label="View"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="edit"
                      control={<Radio />}
                      label="Edit"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* Tenant Lock */}
              <Grid>
                <FormControl>
                  <FormLabel
                    id="tenant-locks-permissions"
                    sx={{
                      fontFamily: 'Inter Variable, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      color: '#5E6366',
                    }}>
                    Tenant Locks
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="tenant-locks-permissions"
                    defaultValue="no"
                    name="tenant-locks-permissions"
                    defaultChecked
                    row>
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="None"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="view"
                      control={<Radio />}
                      label="View"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="edit"
                      control={<Radio />}
                      label="Edit"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* Facilities */}
              <Grid>
                <FormControl>
                  <FormLabel
                    id="facilities-permissions"
                    sx={{
                      fontFamily: 'Inter Variable, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      color: '#5E6366',
                    }}>
                    Facilities
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="facilities-permissions"
                    defaultValue="no"
                    name="facilities-permissions"
                    defaultChecked
                    row>
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="None"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="view"
                      control={<Radio />}
                      label="View"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="edit"
                      control={<Radio />}
                      label="Edit"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* Transfer Facility */}
              <Grid>
                <FormControl>
                  <FormLabel
                    id="transfer-facility-permissions"
                    sx={{
                      fontFamily: 'Inter Variable, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      color: '#5E6366',
                    }}>
                    Transfer Facility
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="transfer-facility-permissions"
                    defaultValue="no"
                    name="transfer-facility-permissions"
                    defaultChecked
                    row>
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '265px',
                        height: '44px',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '265px',
                        height: '44px',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* User */}
              <Grid>
                <FormControl>
                  <FormLabel
                    id="users-permissions"
                    sx={{
                      fontFamily: 'Inter Variable, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      color: '#5E6366',
                    }}>
                    Users
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="users-permissions"
                    defaultValue="no"
                    name="users-permissions"
                    defaultChecked
                    row>
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="None"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="view"
                      control={<Radio />}
                      label="View"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="edit"
                      control={<Radio />}
                      label="Edit"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* Edit Admins */}
              <Grid>
                <FormControl>
                  <FormLabel
                    id="edit-admins-permissions"
                    sx={{
                      fontFamily: 'Inter Variable, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      color: '#5E6366',
                    }}>
                    Edit Admins
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="edit-admins-permissions"
                    defaultValue="no"
                    name="edit-admins-permissions"
                    defaultChecked
                    row>
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '265px',
                        height: '44px',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '265px',
                        height: '44px',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* Subdomains */}
              <Grid>
                <FormControl>
                  <FormLabel
                    id="subdomains-permissions"
                    sx={{
                      fontFamily: 'Inter Variable, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      color: '#5E6366',
                    }}>
                    Subdomains
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="subdomains-permissions"
                    defaultValue="no"
                    name="subdomains-permissions"
                    defaultChecked
                    row>
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="None"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="view"
                      control={<Radio />}
                      label="View"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="edit"
                      control={<Radio />}
                      label="Edit"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* API Settings */}
              <Grid>
                <FormControl>
                  <FormLabel
                    id="api-settings-permissions"
                    sx={{
                      fontFamily: 'Inter Variable, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      color: '#5E6366',
                    }}>
                    API Settings
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="api-settings-permissions"
                    defaultValue="no"
                    name="api-settings-permissions"
                    defaultChecked
                    row>
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="None"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="view"
                      control={<Radio />}
                      label="View"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                    <FormControlLabel
                      value="edit"
                      control={<Radio />}
                      label="Edit"
                      sx={{
                        marginRight: 0,
                        justifyContent: 'center',
                        width: '175px',
                        height: '44px',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        backgroundColor: '#EEF3F5',
                        color: '#ABAFB1',
                        fontFamily: 'Inter Variable, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        '& .MuiRadio-root': {
                          display: 'none',
                        },
                        '&:has(.Mui-checked)': {
                          backgroundColor: '#33C173',
                          color: '#fff',
                        },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
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
              <Button
                variant="contained"
                sx={{
                  boxShadow: 'none',
                  backgroundColor: '#F2F4F5',
                  height: '58px',
                  width: '375px',
                  color: '#5E6366',
                  '&:hover': {
                    backgroundColor: '#33C173',
                    color: '#fff',
                    boxShadow: 'none',
                  },
                }}>
                <Typography
                  variant="button"
                  component="span"
                  sx={{
                    fontFamily: 'Inter Variable, sans-serif',
                    fontWeight: 400,
                    fontSize: '20px',
                    textTransform: 'none',
                  }}>
                  Cancel
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{
                  boxShadow: 'none',
                  backgroundColor: '#F2F4F5',
                  height: '58px',
                  width: '375px',
                  color: '#5E6366',
                  '&:hover': {
                    backgroundColor: '#33C173',
                    color: '#fff',
                    boxShadow: 'none',
                  },
                }}>
                <Typography
                  variant="button"
                  component="span"
                  sx={{
                    fontFamily: 'Inter Variable, sans-serif',
                    fontWeight: 400,
                    fontSize: '20px',
                    textTransform: 'none',
                  }}>
                  Save Changes
                </Typography>
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};
