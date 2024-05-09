import exp from 'constants';
import { Stat, AdjustmentType } from '../src/types/attributes';

describe('Stat', () => {
  describe('getAdjusted', () => {
    it('should return the initial value when no adjustments are applied', () => {
      const stat = new Stat('STR', 10);
      expect(stat.getAdjusted()).toEqual(10);
      expect(stat.getModifier()).toEqual(0);
    });

    it('should apply REDUCE adjustment correctly', () => {
      const stat = new Stat('STR', 10, [{ adjustmentType: AdjustmentType.INCREASE, amount: 3, name: 'Reduce' }]);
      expect(stat.getAdjusted()).toEqual(13);
      expect(stat.getModifier()).toEqual(1);
    });

    it('should apply REDUCE adjustment correctly', () => {
      const stat = new Stat('STR', 10, [{ adjustmentType: AdjustmentType.REDUCE, amount: 3, name: 'Reduce' }]);
      expect(stat.getAdjusted()).toEqual(7);
      expect(stat.getModifier()).toEqual(-2);
    });

    it('should apply multiple adjustments correctly', () => {
      const stat = new Stat('STR', 10, [
        { adjustmentType: AdjustmentType.INCREASE, amount: 5, name: 'Bonus' },
        { adjustmentType: AdjustmentType.REDUCE, amount: 2, name: 'Penalty' },
        { adjustmentType: AdjustmentType.INCREASE, amount: 3, name: 'Bonus' }
      ]);
      expect(stat.getAdjusted()).toEqual(16);
      expect(stat.getModifier()).toEqual(3);
    });
  });
});
