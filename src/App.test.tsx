import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { getByLabelText } from '@testing-library/dom'; // Import getByLabelText correctly
import '@testing-library/jest-dom';

describe('DateRenderingComponent', () => {
   it('renders businessDaysForm correctly', () => {
      render(<App />);
      const businessDaysFormElement =
         document.getElementById('businessDaysForm');
      expect(businessDaysFormElement).toBeInTheDocument();
   });

   it('Initially, result table should not be rendered', async () => {
      // Initially, content should not be rendered
      expect(document.getElementById('table')).toBeNull();
   });

   it('allows user to set start and end dates in the form', async () => {
      render(<App />);
      // Find input fields for start and end dates
      const startDateInput = getByLabelText(
         document.body,
         /First Date:/i,
      ) as HTMLInputElement;
      const endDateInput = getByLabelText(
         document.body,
         /Second Date:/i,
      ) as HTMLInputElement;

      // Simulate user entering dates into input fields
      fireEvent.change(startDateInput, { target: { value: '2024-07-01' } });
      fireEvent.change(endDateInput, { target: { value: '2024-07-15' } });

      // Assert that input values are updated correctly
      expect(startDateInput.value).toBe('2024-07-01');
      expect(endDateInput.value).toBe('2024-07-15');
   });

   it('Weekdays and Business days are calculated when clicking Calculate Days button', async () => {
      const { getByLabelText, getByText } = render(<App />);
      // Simulate user entering start and end dates
      fireEvent.change(getByLabelText('First Date:'), {
         target: { value: '2024-07-01' },
      });
      fireEvent.change(getByLabelText('Second Date:'), {
         target: { value: '2024-07-15' },
      });

      // Click the Calculate button
      fireEvent.click(getByText('Calculate Days'));

      // Wait for the asynchronous state update
      await waitFor(() => {
         // Assert weekdays and business days are calculated correctly document.getElementById('weekdays')
         expect(document.getElementById('weekdays')).toHaveTextContent('9'); // Adjust based on your calculation
         expect(document.getElementById('businessdays')).toHaveTextContent('9'); // Adjust based on your calculation
      });
   });
});
