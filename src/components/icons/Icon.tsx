import { FC } from 'react';

import {
  AddRoleIcon,
  AdminIcon,
  AdminLockIcon,
  AuthIcon,
  AutomationsIcon,
  BackArrowIcon,
  CallCenterAgentIcon,
  DashboardIcon,
  DeleteIcon,
  EditIcon,
  FacilitiesIcon,
  IntegrationsIcon,
  LogoutIcon,
  MannaLogo,
  PersonnelIcon,
  ReportsIcon,
  RolesIcon,
  SettingsIcon,
  VendorIcon,
} from './svgFiles';
import { Box, BoxProps } from '@mui/material';

enum IconNames {
  AddRoleIcon = 'AddRoleIcon',
  AdminIcon = 'AdminIcon',
  AdminLockIcon = 'AdminLockIcon',
  AuthIcon = 'AuthIcon',
  AutomationsIcon = 'AutomationsIcon',
  BackArrowIcon = 'BackArrowIcon',
  CallCenterAgentIcon = 'CallCenterAgentIcon',
  DashboardIcon = 'DashboardIcon',
  DeleteIcon = 'DeleteIcon',
  EditIcon = 'EditIcon',
  FacilitiesIcon = 'FacilitiesIcon',
  IntegrationsIcon = 'IntegrationsIcon',
  LogoutIcon = 'LogoutIcon',
  MannaLogo = 'MannaLogo',
  PersonnelIcon = 'PersonnelIcon',
  ReportsIcon = 'ReportsIcon',
  RolesIcon = 'RolesIcon',
  SettingsIcon = 'SettingsIcon',
  VendorIcon = 'VendorIcon',
}

export type IconName = `${IconNames}`;

type IconProps = BoxProps & { name: IconName };

const SvgFromName: FC<{ name: IconName }> = ({ name }) => {
  switch (name) {
    case 'AddRoleIcon':
      return <AddRoleIcon />;
    case 'AdminIcon':
      return <AdminIcon />;
    case 'AdminLockIcon':
      return <AdminLockIcon />;
    case 'AuthIcon':
      return <AuthIcon />;
    case 'AutomationsIcon':
      return <AutomationsIcon />;
    case 'BackArrowIcon':
      return <BackArrowIcon />;
    case 'CallCenterAgentIcon':
      return <CallCenterAgentIcon />;
    case 'DashboardIcon':
      return <DashboardIcon />;
    case 'DeleteIcon':
      return <DeleteIcon />;
    case 'EditIcon':
      return <EditIcon />;
    case 'FacilitiesIcon':
      return <FacilitiesIcon />;
    case 'IntegrationsIcon':
      return <IntegrationsIcon />;
    case 'LogoutIcon':
      return <LogoutIcon />;
    case 'MannaLogo':
      return <MannaLogo />;
    case 'PersonnelIcon':
      return <PersonnelIcon />;
    case 'ReportsIcon':
      return <ReportsIcon />;
    case 'RolesIcon':
      return <RolesIcon />;
    case 'SettingsIcon':
      return <SettingsIcon />;
    case 'VendorIcon':
      return <VendorIcon />;
  }
};

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  return (
    <Box {...props}>
      <SvgFromName name={name} />
    </Box>
  );
};
