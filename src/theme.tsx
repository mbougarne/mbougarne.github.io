import { FC, PropsWithChildren } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    colors: {
      [index: string]: string;
    };
  }

  interface PaletteOptions {
    colors?: {
      [index: string]: string;
    };
  }
}

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        colors: {
          navbarBg: '#258D54',
          topBarBg: '#020202',
          addRoleBg: '#222425',
          defaultBg: '#222425',
          inActiveButtonBg: '#EEF3F5',
          buttonBg: '#33C173',
          cardIcon: '#808285',
          navLogo: '#FCFCFC',
          navIcon: '#fff',
          white: '#fff',
          black: '#000',
          border: '#CFD3D4',
          borderHover: '#33C173',
          navIconHover: '#258D54',
          text: '#ECECEE',
          textHeadline: '#C4C4C4',
          textBody: '#ABAFB1',
          textButton: '#5E6366',
          textButtonCard: '#33C173',
          textCaption: '#ABAFB1',
          textSubtitle: '#83898C',
        },
        primary: {
          main: '#33C173',
          contrastText: '#fff',
        },
        secondary: {
          main: '#258D54',
          contrastText: '#fff',
        },
        error: {
          main: '#F57E77',
          contrastText: '#fff',
        },
        success: {
          main: '#33C173',
          contrastText: '#fff',
        },
      },
    },
    light: {
      palette: {
        colors: {
          navbarBg: '#33C173',
          topBarBg: '#ECECEE',
          addRoleBg: '#F2F4F5',
          defaultBg: '#fff',
          inActiveButtonBg: '#EEF3F5',
          buttonBg: '#33C173',
          cardIcon: '#C4C4C4',
          navLogo: '#FCFCFC',
          navIcon: '#fff',
          white: '#fff',
          black: '#000',
          navIconHover: '#258D54',
          text: '#ECECEE',
          textHeadline: '#2B2F32',
          textBody: '#808285',
          textButton: '#5E6366',
          textButtonCard: '#33C173',
          textCaption: '#ABAFB1',
          textSubtitle: '#83898C',
        },
        primary: {
          main: '#33C173',
          contrastText: '#fff',
        },
        secondary: {
          main: '#258D54',
          contrastText: '#fff',
        },
        error: {
          main: '#F57E77',
          contrastText: '#fff',
        },
        success: {
          main: '#33C173',
          contrastText: '#fff',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Inter Variable, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Inter Variable, sans-serif',
      fontWeight: 700,
      fontSize: '24px',
    },
    h2: {
      fontFamily: 'Inter Variable, sans-serif',
      fontWeight: 700,
      fontSize: '22px',
    },
    h3: {
      fontFamily: 'Inter Variable, sans-serif',
      fontWeight: 400,
      fontSize: '14px',
    },
    body1: {
      fontFamily: 'Inter Variable, sans-serif',
      fontWeight: 400,
      fontSize: '16px',
    },
    body2: {
      fontFamily: 'Inter Variable, sans-serif',
      fontWeight: 700,
      fontSize: '18px',
    },
    subtitle1: {
      fontFamily: 'Inter Variable, sans-serif',
      fontWeight: 400,
      fontSize: '14px',
    },
    subtitle2: {
      fontFamily: 'Inter Variable, sans-serif',
      fontWeight: 400,
      fontSize: '12px',
    },
    button: {
      fontFamily: 'Inter Variable, sans-serif',
      fontWeight: 400,
      fontSize: '20px',
    },
    caption: {
      fontFamily: 'Inter Variable, sans-serif',
      fontWeight: 400,
      fontSize: '16px',
    },
  },
});

export const AppTheme: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
