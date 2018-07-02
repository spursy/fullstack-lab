class Hero {
    constructor(heroName) {
      this.heroName = heroName;
    }
    dialogue() {
      console.log(`I am ${this.heroName}`)
    }
}
const batman = new Hero("Batman");

// batman.dialogue();

const say = batman.dialogue.bind(batman);
say();