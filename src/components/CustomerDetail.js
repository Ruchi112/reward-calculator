import React from 'react';
import { calculatePoints } from '../util/rewardPoints';

const getMonthlyPoints = (transactions) => {
  const monthlyPoints = {};

  transactions.forEach((transaction) => {
    const month = new Date(transaction.date).getMonth() + 1;
    const points = calculatePoints(transaction.amount);

    if (!monthlyPoints[month]) {
      monthlyPoints[month] = 0;
    }
    monthlyPoints[month] += points;
  });

  return monthlyPoints;
};

const CustomerDetail = ({ customer }) => {
  const monthlyPoints = getMonthlyPoints(customer.transactions);

  return (
    <div className="customer-detail">
      <h3>Monthly Points Breakdown</h3>
      <ul>
        {Object.entries(monthlyPoints).map(([month, points]) => (
          <li key={month}>
            Month {month}: {points} points
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
