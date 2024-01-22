it('モック関数が呼び出される', () => {
  const mockFunc = jest.fn();
  mockFunc();
  expect(mockFunc).toHaveBeenCalled(); //関数呼び出しではなく、関数名を渡す
});

it('モック関数が２回呼び出される', () => {
  const mockFunc = jest.fn();
  mockFunc();
  mockFunc();
  expect(mockFunc).toHaveBeenCalledTimes(2);
});

it('モック関数に引数hogeが渡される', () => {
  const mockFunc = jest.fn();
  mockFunc('Hoge');
  expect(mockFunc).toHaveBeenCalledWith('Hoge');
});
