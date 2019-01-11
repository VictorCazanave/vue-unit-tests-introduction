import Utils from '@/utils'

describe('Utils', () => {
  describe('parseDate', () => {

    it('returns Date object with correct year, month and day values', () => {
      const date = Utils.parseDate('20190124');

      expect(date.getFullYear()).toEqual(2019);
      expect(date.getMonth()).toEqual(0);
      expect(date.getDate()).toEqual(24);
    });

  });
});












/*
    it('returns null when no param', () => {
      const date = Utils.parseDate();

      expect(date).toBeNull();
    });

    it('returns null when invalid param', () => {
      const date = Utils.parseDate(123);

      expect(date).toBeNull();
    });

    it('returns null when empty string param', () => {
      const date = Utils.parseDate('');

      expect(date).toBeNull();
    });

    it('returns null when invalid string param', () => {
      const date = Utils.parseDate('abc');

      expect(date).toBeNull();
    });
*/
