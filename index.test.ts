import { returnTen, isEqual } from './index';

test('5 * 2 = 10', () => {
  expect(returnTen).toBe(10);
});

test('new Dollar(5) equals new Dollar(6) return false', () => {
  expect(isEqual).toBe(false);
});
