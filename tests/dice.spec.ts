import { Dice } from '../src/utils/dice';

describe('Dice', () => {
  describe('rollD4', () => {
    it('should return an object with results and total', () => {
      const { results, total } = Dice.rollD4(3);
      expect(results.length).toBe(3);
      expect(total).toBeGreaterThan(2);
      expect(total).toBeLessThan(13);
    });
  });

  describe('rollD6', () => {
    it('should return an object with results and total', () => {
      const { results, total } = Dice.rollD6(5);
      expect(results.length).toBe(5);
      expect(total).toBeGreaterThan(4);
      expect(total).toBeLessThan(31);
    });
  });

  describe('rollD8', () => {
    it('should return an object with results and total', () => {
      const { results, total } = Dice.rollD8(2);
      expect(results.length).toBe(2);
      expect(total).toBeGreaterThan(1);
      expect(total).toBeLessThan(17);
    });
  });

  describe('rollD12', () => {
    it('should return an object with results and total', () => {
      const { results, total } = Dice.rollD12(4);
      expect(results.length).toBe(4);
      expect(total).toBeGreaterThan(3);
      expect(total).toBeLessThan(49);
    });
  });

  describe('rollD10', () => {
    it('should return an object with results and total', () => {
      const { results, total } = Dice.rollD10(6);
      expect(results.length).toBe(6);
      expect(total).toBeGreaterThan(5);
      expect(total).toBeLessThan(61);
    });
  });

  describe('rollD100', () => {
    it('should return an object with results and total', () => {
      const { results, total } = Dice.rollD100(1);
      expect(results.length).toBe(1);
      expect(total).toBeGreaterThan(0);
      expect(total).toBeLessThan(101);
    });
  });

  describe('rollD20', () => {
    it('should return an object with results and total', () => {
      const { results, total } = Dice.rollD20(10);
      expect(results.length).toBe(10);
      expect(total).toBeGreaterThan(9);
      expect(total).toBeLessThan(201);
    });
  });
});
