import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('data.json').then((response) => response.json()).then((data) => {
      setCustomers(data);
      setLoading(false);
    }).catch(() => {
      setError(true);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <h1>Customer Reward Points</h1>
      <CustomerList customers={customers} />
    </div>
  );
};

export default App;
