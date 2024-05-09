import { Logger } from '../utils/logger';

export enum AdjustmentType {
  INCREASE = 'INCREASE',
  REDUCE = 'REDUCE'
}

export class AttributeAdjustment {
  constructor(
    public name: string,
    public amount: number,
    public adjustmentType: AdjustmentType
  ) {
    this.name = name;
    this.amount = amount;
    this.adjustmentType = adjustmentType;
  }
}

export class AttributeScores {
  constructor(
    public STR: Stat = new Stat('STR', 10),
    public CON: Stat = new Stat('CON', 10),
    public DEX: Stat = new Stat('DEX', 10),
    public INT: Stat = new Stat('INT', 10),
    public WIS: Stat = new Stat('WIS', 10),
    public CHA: Stat = new Stat('CHA', 10)
  ) {
    this.STR = STR;
    this.CON = CON;
    this.DEX = DEX;
    this.INT = INT;
    this.WIS = WIS;
    this.CHA = CHA;
  }
}

export class Stat {
  constructor(
    public name: 'STR' | 'CON' | 'DEX' | 'INT' | 'WIS' | 'CHA',
    public value: number = 10,
    public adjustments: AttributeAdjustment[] = []
  ) {
    this.adjustments = adjustments;
    this.value = value;
    this.name = name;
  }

  getAdjusted(): number {
    let adjustedValue = this.value;

    for (const adjustment of this.adjustments) {
      Logger.info('Stat name: ' + this.name);
      Logger.info('Stat value: ' + this.value);
      Logger.info('Adjusted value: ' + adjustedValue);
      switch (adjustment.adjustmentType) {
        case 'INCREASE':
          adjustedValue += adjustment.amount;
          break;
        case 'REDUCE':
          adjustedValue -= adjustment.amount;
          break;
      }
    }
    return adjustedValue;
  }

  getModifier(): number {
    return Math.floor((this.getAdjusted() - 10) / 2);
  }
}

export class HitPoints {
  constructor(
    public value: number
  ) {
    this.value = value;
  }
}

export class ArmorClass {
  constructor(
    public value: number
  ) {
    this.value = value;
  }
}