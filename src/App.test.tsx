import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('DateRenderingComponent', () => {
   it('renders start and end dates correctly', () => {
      render(<App />);
      const startDateElement = document.getElementById('firstDate');
      const endDateElement = document.getElementById('secondDate');
      expect(startDateElement).toBeInTheDocument();
      expect(endDateElement).toBeInTheDocument();
   });
});
