const hero = {
    heroName: "Batman",
    dialogue() {
      console.log(`I am ${this.heroName}!`);
    }
};

//hero.dialogue();
//const saying = hero.dialogue;
const saying = hero.dialogue.bind(hero);
saying();