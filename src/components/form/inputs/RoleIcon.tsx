import { FC, ReactElement } from 'react';
import { styled } from '@mui/material';
import SelectRolIcon, { IconContainerProps } from '@mui/material/Rating';

import { Icon } from '@/components';

const StyledIcon = styled(SelectRolIcon)(({ theme }) => ({
  '& .MuiRating-icon .MuiBox-root': {
    color: theme.palette.colors.textButtonCard,
    overflow: 'visible',
  },
  '& .MuiRating-icon .MuiBox-root > svg': {
    width: '60px',
    height: '60px',
  },
  '& .MuiRating-iconEmpty .MuiBox-root': {
    color: theme.palette.colors.textCaption,
  },
  '& label': {
    display: 'block',
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
  value: number;
}

export const RoleIcon: FC<RoleIconProps> = ({ onChange, value }) => {
  return (
    <StyledIcon
      name="roleIcon"
      value={value}
      defaultValue={1}
      defaultChecked
      onChange={onChange}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
};
