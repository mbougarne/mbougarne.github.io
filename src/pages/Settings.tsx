import { FC } from 'react';
import { Page } from './Page';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  useColorScheme,
} from '@mui/material';
import { AppLoader } from '@/components';

export const Settings: FC = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return <AppLoader />;
  }

  return (
    <Page title="Settings">
      <Box sx={{ marginTop: '24px' }}>
        <Box>
          <FormControl>
            <FormLabel id="demo-theme-toggle">Theme</FormLabel>
            <RadioGroup
              aria-labelledby="demo-theme-toggle"
              name="theme-toggle"
              row
              value={mode}
              onChange={(event) =>
                setMode(event.target.value as 'system' | 'light' | 'dark')
              }>
              <FormControlLabel
                value="system"
                control={<Radio />}
                label="System"
              />
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel
                value="dark"
                control={<Radio />}
                label="Dark"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Page>
  );
};
