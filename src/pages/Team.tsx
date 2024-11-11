import { FC } from 'react';
import { Box, Grid2 as Grid } from '@mui/material';
import { AddRoleCard, RoleCard } from '@/components/roles';
import { Page } from './Page';

export const Team: FC = () => {
  return (
    <Page title="User Roles">
      <Box
        sx={{
          marginTop: '24px',
        }}>
        <Grid
          container
          spacing="24px">
          <Grid>
            <RoleCard />
          </Grid>
          <Grid>
            <RoleCard />
          </Grid>
          <Grid>
            <RoleCard />
          </Grid>
          <Grid>
            <RoleCard />
          </Grid>
          <Grid>
            <RoleCard />
          </Grid>
          <Grid>
            <RoleCard />
          </Grid>
          <Grid>
            <AddRoleCard />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};
