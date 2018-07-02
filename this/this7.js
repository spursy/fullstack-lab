const hero = {
    heroName: "Batman",
    dialogue() {
      console.log(`I am ${this.heroName}`);
    }
};
setTimeout(hero.dialogue.bind(hero), 100);