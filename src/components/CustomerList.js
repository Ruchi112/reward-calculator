import React from 'react';
import CustomerDetail from './CustomerDetail.js';
import { calculatePoints } from '../util/rewardPoints';

const CustomerList = ({ customers }) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => {
        const totalPoints = customer.transactions.reduce(
          (total, transaction) => total + calculatePoints(transaction.amount),
          0
        );

        return (
          <div key={customer.id} className="customer">
            <h2>{customer.name}</h2>
            <p>Total Points: {totalPoints}</p>
            <CustomerDetail customer={customer} />
          </div>
        );
      })}
    </div>
  );
};


export default CustomerList;
