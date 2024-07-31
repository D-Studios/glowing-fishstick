//2) Mocking API Calls
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import UserComponent from '../UserComponent';

// Mock the global fetch function before each test
beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' }
    ])
  });
});

// Restore the original fetch implementation after each test
afterEach(() => {
  global.fetch.mockRestore();
});

test('displays a list of users', async () => {
    // Render the component
    render(<UserComponent />);
  
    // Wait for the API call to resolve and for the component to update
    expect(await screen.findByText(/John Doe/i)).toBeTruthy();
    expect(await screen.findByText(/Jane Doe/i)).toBeTruthy();
  });
