import { FC, useContext } from 'react';
import { Box, Grid2 as Grid } from '@mui/material';
import { AddRoleCard, RoleCard } from '@/components/roles';
import { userContext } from '@/store';
import { Page } from '@/pages/Page';

export const Team: FC = () => {
  const { state } = useContext(userContext);

  return (
    <Page title="User Roles">
      <Box
        sx={{
          marginTop: '24px',
        }}>
        <Grid
          container
          spacing="24px">
          {state.roles.map((role) => {
            return (
              <Grid key={role.id}>
                <RoleCard role={role} />
              </Grid>
            );
          })}
          <Grid>
            <AddRoleCard />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};
