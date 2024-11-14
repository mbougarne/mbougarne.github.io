import { render, screen } from '@testing-library/react';
import { Dashboard } from '@/pages';

describe('User', () => {
  test('Render dashboard heading', async () => {
    render(<Dashboard />);
    expect(
      screen.getByRole('heading', { name: 'Dashboard' }),
    ).toBeInTheDocument();
  });
});
