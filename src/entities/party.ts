import { Adventurer } from "./adventurer";


  export class Party {
    name: string;
    adventurers: Adventurer[];
    constructor(
      name: string,
      adventurers: Adventurer[]
    ) {
      this.name = name;
      this.adventurers = adventurers;
    }
  }