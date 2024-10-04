export const calculatePoints = (amount) => {
  let points = 0;

  if (amount > 100) {
    points += (amount - 100) * 2;
    points += 50; // for the amount between 50 and 100
  } else if (amount > 50) {
    points += (amount - 50) * 1;
  }

  return points;
};

export const getMonthlyPoints = (transactions) => {
  const monthlyPoints = {};

  transactions.forEach((transaction) => {
    const month = new Date(transaction.date).toLocaleString('default', { month: 'long' });
    const flooredAmount = Math.floor(transaction.amount);
    const points = calculatePoints(flooredAmount);

    if (!monthlyPoints[month]) {
      monthlyPoints[month] = 0;
    }
    monthlyPoints[month] += points;
  });

  return monthlyPoints;
};

