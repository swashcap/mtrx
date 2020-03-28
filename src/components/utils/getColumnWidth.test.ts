import { getColumnWidth } from './getColumnWidth';

test('getColumnWidth', () => {
  expect(
    getColumnWidth(320, {
      columns: 2,
      gutter: 16,
      margin: 16,
    })
  ).toBe(136);
  expect(
    getColumnWidth(375, {
      columns: 4,
      gutter: 12,
      margin: 18,
    })
  ).toBe(75.75);
});
