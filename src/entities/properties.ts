
  
  export class Gear {
    constructor(
      public name: string,
      public description: string,
      public slots: number
    ) {
      this.name = name;
      this.description = description;
      this.slots = slots;
    }
  }
  
  export class CharacterInfo {
    constructor(
      public name: string,
      public level: number,
      public character_class: string,
      public title: string,
      public deity: string,
      public background: string,
      public alignment: string
    ){
      this.character_class = character_class;
      this.deity = deity;
      this.level = level;
      this.name = name;
      this.title = title;
      this.background = background;
      this.alignment = alignment;
    }
  }
  
  