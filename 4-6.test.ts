import { isEqual, isTwoEqual } from './4-6';

test('new Dollar(10) equals fiveFranc.times(2) return true', () => {
  expect(isEqual).toBe(true);
});

test('new Dollar(5) equals new Franc(5) return true', () => {
  expect(isTwoEqual).toBe(true);
});
