import { SxProps, Theme } from '@mui/material';

type SxType = SxProps<Theme> | undefined;

export const textFieldInput: SxType = {
  paddingX: '16px',
  paddingY: '8px',
  width: '375px',
  height: '52px',
  borderRadius: '8px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#CFD3D4',
  },
};

export const textField: SxType = {
  marginY: '10px',
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#33C173!important',
  },
};

export const permissionsLabel = {
  fontFamily: 'Inter Variable, sans-serif',
  fontWeight: 400,
  fontSize: '12px',
  color: '#5E6366',
};

export const permissionsButtonLeft: SxType = {
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
};

export const permissionsButtonMiddle: SxType = {
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
};

export const permissionsButtonRight: SxType = {
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
};

export const permissionsButtonLargeLeft: SxType = {
  marginRight: 0,
  justifyContent: 'center',
  maxWidth: '100%',
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
};

export const permissionsButtonLargeRight: SxType = {
  marginRight: 0,
  justifyContent: 'center',
  maxWidth: '100%',
  width: '250px',
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
};
