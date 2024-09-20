import { fetchCustomerData } from '../../api/index';

test('fetches customer data', async () => {
  const data = await fetchCustomerData();
  expect(data.length).toBe(2);
  expect(data[0].name).toBe('John Doe');
});
