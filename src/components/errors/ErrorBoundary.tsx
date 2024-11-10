import { Alert, AlertTitle, Stack, Typography } from '@mui/material';
import { common } from '@mui/material/colors';
import { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Stack
          sx={{
            height: '100vh',
            backgroundColor: common.white,
          }}>
          <Alert severity="error">
            <AlertTitle>{this.state.error?.name}</AlertTitle>
            <Typography
              variant="body1"
              component="p">
              {this.state.error?.message}
            </Typography>
          </Alert>
        </Stack>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}
