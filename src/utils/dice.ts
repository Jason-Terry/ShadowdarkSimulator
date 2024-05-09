import { Logger } from './logger';

export class Dice {
  static rollD4(quantity: number): { results: number[]; total: number } {
    const results: number[] = [];
    let total = 0;
    for (let i = 0; i < quantity; i++) {
      const roll = Math.floor(Math.random() * 4) + 1;
      results.push(roll);
      total += roll;
    }
    Logger.info('Dice results: ' + results);
    return { results, total };
  }

  static rollD6(quantity: number): { results: number[]; total: number } {
    const results: number[] = [];
    let total = 0;
    for (let i = 0; i < quantity; i++) {
      const roll = Math.floor(Math.random() * 6) + 1;
      results.push(roll);
      total += roll;
    }
    Logger.info('Dice results: ' + results);
    return { results, total };
  }

  static rollD8(quantity: number): { results: number[]; total: number } {
    const results: number[] = [];
    let total = 0;
    for (let i = 0; i < quantity; i++) {
      const roll = Math.floor(Math.random() * 8) + 1;
      results.push(roll);
      total += roll;
    }
    Logger.info('Dice results: ' + results);
    return { results, total };
  }

  static rollD12(quantity: number): { results: number[]; total: number } {
    const results: number[] = [];
    let total = 0;
    for (let i = 0; i < quantity; i++) {
      const roll = Math.floor(Math.random() * 12) + 1;
      results.push(roll);
      total += roll;
    }
    Logger.info('Dice results: ' + results);
    return { results, total };
  }

  static rollD10(quantity: number): { results: number[]; total: number } {
    const results: number[] = [];
    let total = 0;
    for (let i = 0; i < quantity; i++) {
      const roll = Math.floor(Math.random() * 10) + 1;
      results.push(roll);
      total += roll;
    }
    Logger.info('Dice results: ' + results);
    return { results, total };
  }

  static rollD100(quantity: number): { results: number[]; total: number } {
    const results: number[] = [];
    let total = 0;
    for (let i = 0; i < quantity; i++) {
      const roll = Math.floor(Math.random() * 100) + 1;
      results.push(roll);
      total += roll;
    }
    Logger.info('Dice results: ' + results);
    return { results, total };
  }

  static rollD20(quantity: number): { results: number[]; total: number } {
    const results: number[] = [];
    let total = 0;
    for (let i = 0; i < quantity; i++) {
      const roll = Math.floor(Math.random() * 20) + 1;
      results.push(roll);
      total += roll;
    }
    Logger.info('Dice results: ' + results);
    return { results, total };
  }
}
