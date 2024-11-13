import { FC, useEffect, useContext } from 'react';
import { Backdrop, Box, CircularProgress, Grid2 as Grid } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import { AddRoleCard, RoleCard } from '@/components/roles';
import { userContext } from '@/store';
import { Page } from './Page';

export const Team: FC = () => {
  const roles = useLoaderData();
  const { dispatch, state } = useContext(userContext);

  useEffect(() => {
    dispatch({
      type: 'set/roles',
      payload: {
        roles,
      },
    });
  }, [roles, dispatch]);

  if (!state.roles.length) {
    return (
      <Backdrop
        open={true}
        sx={{ backgroundColor: 'colors.defaultBg' }}>
        <CircularProgress color="primary" />
      </Backdrop>
    );
  }

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
