import { Creature } from "./creature";

export class Encounter {
  
    name: string;
    creatures: Creature[];
    constructor(
      name: string,
      creatures: Creature[]
    ) {
      this.name = name;
      this.creatures = creatures;
    }
  }

 