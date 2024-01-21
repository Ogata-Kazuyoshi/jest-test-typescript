import { sum } from './sum';

// it('1 plus 2 tobe 3 ', () => {
//   expect(sum(1, 2)).toBe(3);
// });

it.each`
  a    | b     | expected
  ${1} | ${2}  | ${3}
  ${1} | ${-2} | ${-1}
`('$aと$bを足すと$expectedになる', ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected);
});
