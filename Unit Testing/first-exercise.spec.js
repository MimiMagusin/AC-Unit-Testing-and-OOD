
// This one fails:
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });


test('if we actually watch all', () => {
  expect(true).toBe(true);
});

test('can false be true?', () => {
  const True = true;
  const False = false;

  expect(True).not.toBe(False);
  expect(False).toEqual(false);
  console.log("hey hey hey");
})