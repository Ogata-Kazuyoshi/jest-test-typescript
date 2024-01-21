import { ShoppingList } from './practice';

describe('演習問題のテストを実施', () => {
  describe('test1：`addItem`メソッドが、アイテムをリストに追加できることを確認するテストケース', () => {
    let testShop: ShoppingList;
    beforeAll(() => {
      testShop = new ShoppingList();
    });
    it('test1を追加', () => {
      testShop.addItem('test1');
      expect(testShop.list).toEqual(['test1']);
    });
    it('test2を追加', () => {
      testShop.addItem('test2');
      expect(testShop.list).toEqual(['test1', 'test2']);
    });
  });
  describe('test2：`removeItem`メソッドが、アイテムをリストから削除できることを確認するテストケース', () => {
    let testShop: ShoppingList;
    beforeAll(() => {
      testShop = new ShoppingList();
      testShop.addItem('test1');
      testShop.addItem('test2');
      testShop.addItem('test3');
    });
    it('test1を削除', () => {
      testShop.removeItem('test1');
      expect(testShop.list).toEqual(['test2', 'test3']);
    });
    it('test3を削除', () => {
      testShop.removeItem('test3');
      expect(testShop.list).toEqual(['test2']);
    });
  });
  describe('test3：`removeItem`メソッドが、存在しないアイテムの削除を試みたときにエラーをスローすることを確認するテストケース', () => {
    let testShop: ShoppingList;
    beforeAll(() => {
      testShop = new ShoppingList();
      testShop.addItem('test1');
      testShop.addItem('test2');
      testShop.addItem('test3');
    });
    it('removeで存在しないアイテムを削除しようとした場合エラーを投げる', () => {
      expect(() => {
        testShop.removeItem('test4');
      }).toThrow(`アイテム: test4 は存在しません`);
    });
  });
});
