import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import RootLayout from './layout';

vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' }),
}));

describe('RootLayout', () => {
  it('renders the html and body wrappers', () => {
    render(
      <RootLayout>
        <div>Portfolio content</div>
      </RootLayout>,
    );

    expect(document.documentElement).toHaveAttribute('lang', 'en');
    expect(screen.getByText(/portfolio content/i)).toBeInTheDocument();
  });
});
