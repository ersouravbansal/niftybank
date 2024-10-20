import { render, screen } from '@testing-library/react';
import Header from '../src/app/components/Header';
import { act } from 'react';
import '@testing-library/jest-dom';

describe('Header Component', () => {
    beforeEach(() => {
      act(() => {
        render(<Header />);
      });
    });
  
    test('renders the header title', () => {
        // Check if the title is present
      const title = screen.getByText(/AlgoTest/i);
      expect(title).toBeInTheDocument();
    });
  
  });