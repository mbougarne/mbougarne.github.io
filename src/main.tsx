import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routes } from '@/routes';
import { AppLoader, ErrorBoundary } from '@/components';

// Supports weights 100-900
import '@fontsource-variable/inter/opsz.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider
        router={routes}
        fallbackElement={<AppLoader />}
      />
    </ErrorBoundary>
  </StrictMode>,
);
