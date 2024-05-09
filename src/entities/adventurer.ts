import { Action } from "./action.ent";
import { ArmorClass, AttributeScores, HitPoints } from "../types/attributes";
import { CharacterInfo, Gear } from "./properties";
import { BaseEntity } from "./base.ent";

export class Adventurer extends BaseEntity {

  characterInfo: CharacterInfo;

  hp: HitPoints;

  ac: ArmorClass;

  actions: Action[];

  stats: AttributeScores;

  gear: Gear[];

  maxGear: number;

  constructor(
    characterInfo: CharacterInfo,
    hp: HitPoints,
    ac: ArmorClass,
    stats: AttributeScores,
    actions: Action[],
    gear: Gear[],
    maxGear: number
  ) {
    super();
    this.characterInfo = characterInfo;
    this.hp = hp;
    this.ac = ac;
    this.stats = stats;
    this.actions = actions;
    this.gear = gear;
    this.maxGear = maxGear;
  }
}