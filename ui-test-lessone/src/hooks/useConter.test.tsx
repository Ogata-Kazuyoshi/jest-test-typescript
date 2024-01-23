import { act, renderHook } from '@testing-library/react';
import useCounter from './useCounter';

describe('userCounter', () => {
  it('increment', () => {
    const { result } = renderHook(() => useCounter(1));
    expect(result.current.count).toBe(1);
    act(() => result.current.increment()); //incremenntでステートの変更をしてもしても同期されないので、actの中で実施するz
    expect(result.current.count).toBe(2);
  });
});
