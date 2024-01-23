import { render, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  it('初期状態ではテキストは空欄', () => {
    render(<Form />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveTextContent('');
  });

  it('入力したテキストがSubmitされる', async () => {
    const alertSpy = jest.spyOn(window, 'alert').mockReturnValue();
    render(<Form />);
    const input = screen.getByPlaceholderText('Enter text');
    await userEvent.type(input, 'Test Text');
    expect(screen.getByDisplayValue('Test Text')).toBeInTheDocument();

    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(alertSpy).toHaveBeenCalledWith('submitted: Test Text');
    alertSpy.mockRestore(); //spyのクリアを忘れないように
  });
});
