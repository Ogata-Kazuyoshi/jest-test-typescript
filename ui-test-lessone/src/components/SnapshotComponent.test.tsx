import { render } from '@testing-library/react';
import SnapshotComponent from './SnapshotComponent';

//snapshotテスト ->jestライブラリ
//特定のコンポーネントのスナップショットを記録しておくことで、思わぬレンダリングがされていないかをテストする

it('Snapshotテスト', () => {
  const { container } = render(<SnapshotComponent text="React" />);
  //renderされたもの全ての要素を受け取りにはcontainerで分割代入する
  expect(container).toMatchSnapshot(); //初めて表示される時は新しく作成される。
});
