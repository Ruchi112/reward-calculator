import { render, screen } from '@testing-library/react';
import CustomerList from '../../components/CustomerList';

const mockCustomers = [
  {
    id: 1,
    name: 'John Doe',
    transactions: [{ date: '2024-06-15', amount: 120 }, { date: '2024-06-17', amount: 120 }],
  },
];

test('renders customer list', () => {
  render(<CustomerList customers={mockCustomers} />);
  expect(screen.getByText(/John Doe/)).toBeInTheDocument();
  expect(screen.getByText(/Total Points: 180/)).toBeInTheDocument();
});
