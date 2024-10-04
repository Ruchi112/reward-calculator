// App.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

// Mock the fetch function
global.fetch = jest.fn();

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear any previous mocks
  });

  test('displays loading message initially', () => {
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([]),
    });
    render(<App />);
    expect(screen.getByText(/Loading\.\.\./i)).toBeInTheDocument();
  });

  test('displays error message when fetch fails', async () => {
    // Mock the fetch call to reject
    fetch.mockRejectedValueOnce(new Error('Fetch failed'));

    render(<App />);

    // Wait for loading to finish
    await waitFor(() => expect(screen.queryByText(/Loading\.\.\./i)).not.toBeInTheDocument());

    // Check if the error message is displayed
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });

  test('displays customer data after loading', async () => {
    const mockData = [
      { id: 1, name: 'John Doe', points: 100, transactions: [] },
      { id: 2, name: 'Jane Smith', points: 200, transactions: [] },
    ];

    // Mock the fetch call to return the mock data
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(<App />);

    // Wait for loading to finish
    await waitFor(() => expect(screen.queryByText(/Loading\.\.\./i)).not.toBeInTheDocument());

    // Check if customer names are displayed
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
  });

  test('calls fetch on mount', async () => {
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([]),
    });
    
    render(<App />);
    
    // Wait for loading to finish
    await waitFor(() => expect(screen.queryByText(/Loading\.\.\./i)).not.toBeInTheDocument());

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('data.json');
  });

  test('renders the correct number of customers', async () => {
    const mockData = [
      { id: 1, name: 'John Doe', points: 100, transactions: [] },
      { id: 2, name: 'Jane Smith', points: 200, transactions: [] },
    ];

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(<App />);

    // Wait for loading to finish
    await waitFor(() => expect(screen.queryByText(/Loading\.\.\./i)).not.toBeInTheDocument());

    // Check if both customers are rendered
    const customerElements = screen.getAllByText(/Doe|Smith/i); // Regex to match both names
    expect(customerElements.length).toBe(2); // Check if two customer elements are found
  });
});
