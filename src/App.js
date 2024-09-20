// App.js
import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';
import { fetchCustomerData } from './api';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    fetchCustomerData().then((data) => {
      setCustomers(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Customer Reward Points</h1>
      <CustomerList customers={customers} />
    </div>
  );
};

export default App;
