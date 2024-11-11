import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const TeamOutlet: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
