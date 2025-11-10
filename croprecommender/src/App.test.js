import { render, screen } from '@testing-library/react';

// @vercel/analytics paketinin ESM içeriği Jest tarafından doğrudan parse edilemiyor.
// Test sırasında bu modülü basitçe mockluyoruz.
jest.mock('@vercel/analytics', () => ({ inject: () => {} }), { virtual: true });
jest.mock('@vercel/analytics/react', () => ({ Analytics: () => null }), { virtual: true });

import App from './App';

test('App yükleniyor ve AGRI.AI başlığı görünür', () => {
  render(<App />);
  const elements = screen.getAllByText(/AGRI.AI/i);
  expect(elements.length).toBeGreaterThan(0);
});
