import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { UserSearch } from './UserSearch';

const user = userEvent.setup();

jest.mock('axios');
const mockAxios = jest.mocked(axios);

describe('UserSerchtest', () => {
  beforeEach(() => {
    mockAxios.get.mockReset();
  });

  it('1:入力フィールドに値を入力し、検索ボタンをクリックすると適切なAPIリクエストが発生する', async () => {
    const userInfo = { id: 1, name: 'test' };
    const res = { data: userInfo };
    mockAxios.get.mockResolvedValue(res);
    render(<UserSearch />);
    const input = screen.getByRole('textbox'); //テキストボックスの要素を取得
    await user.type(input, userInfo.name); //テキストボックスの中に、ユーザーイベントとしてuserinfo.nameを渡す
    const button = screen.getByRole('button');
    await user.click(button);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/api/users?query=${userInfo.name}`
    );
  });

  it('2:APIから取得したユーザー情報が画面に表示される', async () => {
    const userInfo = { id: 1, name: 'test' };
    const res = { data: userInfo };
    mockAxios.get.mockResolvedValue(res);
    render(<UserSearch />);
    const input = screen.getByRole('textbox'); //テキストボックスの要素を取得
    await user.type(input, userInfo.name); //テキストボックスの中に、ユーザーイベントとしてuserinfo.nameを渡す
    const button = screen.getByRole('button');
    await user.click(button);
    await waitFor(() =>
      expect(screen.getByText(userInfo.name)).toBeInTheDocument()
    );
  });
});
