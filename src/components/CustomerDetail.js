import React from 'react';
import { calculatePoints, getMonthlyPoints } from '../util/rewardPoints';

const CustomerDetail = ({ customer }) => {
  const monthlyPoints = getMonthlyPoints(customer.transactions);

  return (
    <div className="customer-detail">
      <h3>Monthly Points Breakdown</h3>
      <ul>
        {Object.entries(monthlyPoints).map(([month, points]) => (
          <li key={month}>
            {month}: {points} points
          </li>
        ))}
      </ul>

      <h4>Transactions:</h4>
      <ul>
        {customer.transactions.map((transaction, index) => (
          <li key={index} className="transaction">
            Date: {transaction.date}, Amount: ${transaction.amount}, Points: {calculatePoints(transaction.amount)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerDetail;
