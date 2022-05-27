import { render, screen } from '@testing-library/react';

import Home from '@/pages/home';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Home page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(<Home />);

      const heading = screen.getByRole('heading', {
        name: /Boilerplate code/,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
