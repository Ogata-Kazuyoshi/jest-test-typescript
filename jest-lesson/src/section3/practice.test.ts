import axios from 'axios';
import Users from './practice';

jest.mock('axios');
const mockAxios = jest.mocked(axios);

describe('Usersのテスト', () => {
  beforeEach(() => {
    mockAxios.get.mockClear();
    //モックを各itごとにクリアする
  });

  it('axiosのモック化テスト', async () => {
    const users = [{ name: 'taro' }, { name: 'jiro' }];
    const resp = { data: users };
    mockAxios.get.mockResolvedValue(resp);
    const result = await Users.all();
    expect(result).toEqual(users);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('/users.json');
  });
});
