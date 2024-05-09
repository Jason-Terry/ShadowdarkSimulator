import { AttributeScores } from "../types/attributes";
import { Actions } from "./action.ent";

export class Creature {
    constructor(
      public name: string,
      public alignment: string,
      public level: number,
      public stats: AttributeScores,
      public actions: Actions[]
    ) {
      this.name = name;
      this.stats = stats;
      this.actions = actions;
    }
  }