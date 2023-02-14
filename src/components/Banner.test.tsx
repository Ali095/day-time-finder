import { render, screen } from '@testing-library/react';
import Banner from './Banner';

describe('Banner', () => {
  test('renders sunrise and sunset times', () => {
    render(<Banner sunrise="6:00 AM" sunset="6:00 PM" />);
    const sunriseElement = screen.getByText(/6:00 AM/i);
    const sunsetElement = screen.getByText(/6:00 PM/i);
    expect(sunriseElement).toBeInTheDocument();
    expect(sunsetElement).toBeInTheDocument();
  });

  test('renders loading spinner when loading prop is true', () => {
    render(<Banner sunrise="6:00 AM" sunset="6:00 PM" loading />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toBeInTheDocument();
  });

  test('renders "Sunrise and Sunset" heading when loading prop is false', () => {
    render(<Banner sunrise="6:00 AM" sunset="6:00 PM" loading={false} />);
    const headingElement = screen.getByRole('heading', { level: 3 });
    expect(headingElement).toHaveTextContent('Sunrise and Sunset');
  });
});
