import { FC, ReactElement } from 'react';
import { styled } from '@mui/material';
import SelectRolIcon, { IconContainerProps } from '@mui/material/Rating';

import { Icon } from '@/components';

const StyledIcon = styled(SelectRolIcon)(({ theme }) => ({
  '& .MuiRating-icon .MuiSvgIcon-root': {
    color: theme.palette.colors.textButtonCard,
    overflow: 'visible',
    fontSize: '14px',
    marginRight: '12px',
  },
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.colors.textCaption,
    fontSize: '14px',
    marginRight: '12px',
  },
  '& label': {
    display: 'block',
    width: '44px',
    height: '44px',
    marginRight: '16px',
  },
  '& .MuiRating-pristine': {
    display: 'none',
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

interface RoleIconProps {
  onChange?: (event: React.SyntheticEvent, value: number | null) => void;
}

export const RoleIcon: FC<RoleIconProps> = ({ onChange }) => (
  <StyledIcon
    onChange={onChange}
    name="roleIcon"
    defaultValue={1}
    defaultChecked
    IconContainerComponent={IconContainer}
    getLabelText={(value: number) => customIcons[value].label}
    highlightSelectedOnly
  />
);
