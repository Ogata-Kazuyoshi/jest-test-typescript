import fs from 'fs';
import { readFile } from './mock_module';

//itの外に書かないといけない
jest.mock('fs');
const mockFs = jest.mocked(fs);
mockFs.readFileSync.mockReturnValue('dummy data'); //戻り値を実際の関数どうこうではなくて、ダミー値で入れる

it('readFileがデータを返却する', () => {
  const result = readFile('path/dummy');
  expect(result).toBe('dummy data');
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
});
