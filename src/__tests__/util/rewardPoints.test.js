import { calculatePoints } from '../../util/rewardPoints';

test('calculate points for $120', () => {
  expect(calculatePoints(120)).toBe(90);
});

test('calculate points for $80', () => {
  expect(calculatePoints(80)).toBe(30);
});

test('calculate points for $30', () => {
  expect(calculatePoints(30)).toBe(0);
});
