import { SxProps, Theme } from '@mui/material';

type SxType = SxProps<Theme> | undefined;

export const textFieldInput: SxType = {
  paddingX: '16px',
  paddingY: '8px',
  width: '375px',
  height: '52px',
  borderRadius: '8px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'colors.border',
  },
};

export const textField: SxType = {
  marginY: '10px',
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'colors.borderHover!important',
  },
};

export const permissionsLabel = {
  fontSize: '12px',
  color: 'colors.textButton',
};

export const permissionsButtonLeft: SxType = {
  marginRight: 0,
  justifyContent: 'center',
  width: '175px',
  height: '44px',
  borderTopLeftRadius: '8px',
  borderBottomLeftRadius: '8px',
  backgroundColor: 'colors.inActiveButtonBg',
  color: 'colors.textCaption',
  fontSize: '16px',
  '& .MuiRadio-root': {
    display: 'none',
  },
  '&:has(.Mui-checked)': {
    backgroundColor: 'colors.textButtonCard',
    color: 'colors.white',
  },
};

export const permissionsButtonMiddle: SxType = {
  marginRight: 0,
  justifyContent: 'center',
  width: '175px',
  height: '44px',
  backgroundColor: 'colors.inActiveButtonBg',
  color: 'colors.textCaption',
  fontSize: '16px',
  '& .MuiRadio-root': {
    display: 'none',
  },
  '&:has(.Mui-checked)': {
    backgroundColor: 'colors.textButtonCard',
    color: 'colors.white',
  },
};

export const permissionsButtonRight: SxType = {
  marginRight: 0,
  justifyContent: 'center',
  width: '175px',
  height: '44px',
  borderTopRightRadius: '8px',
  borderBottomRightRadius: '8px',
  backgroundColor: 'colors.inActiveButtonBg',
  color: 'colors.textCaption',
  fontSize: '16px',
  '& .MuiRadio-root': {
    display: 'none',
  },
  '&:has(.Mui-checked)': {
    backgroundColor: 'colors.textButtonCard',
    color: 'colors.white',
  },
};

export const permissionsButtonLargeLeft: SxType = {
  marginRight: 0,
  justifyContent: 'center',
  maxWidth: '100%',
  width: '265px',
  height: '44px',
  borderTopLeftRadius: '8px',
  borderBottomLeftRadius: '8px',
  backgroundColor: 'colors.inActiveButtonBg',
  color: 'colors.textCaption',
  fontSize: '16px',
  '& .MuiRadio-root': {
    display: 'none',
  },
  '&:has(.Mui-checked)': {
    backgroundColor: 'colors.textButtonCard',
    color: 'colors.white',
  },
};

export const permissionsButtonLargeRight: SxType = {
  marginRight: 0,
  justifyContent: 'center',
  maxWidth: '100%',
  width: '250px',
  height: '44px',
  borderTopRightRadius: '8px',
  borderBottomRightRadius: '8px',
  backgroundColor: 'colors.inActiveButtonBg',
  color: 'colors.textCaption',
  fontSize: '16px',
  '& .MuiRadio-root': {
    display: 'none',
  },
  '&:has(.Mui-checked)': {
    backgroundColor: 'colors.textButtonCard',
    color: 'colors.white',
  },
};
