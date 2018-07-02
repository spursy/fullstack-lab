function dialogue () {
    console.log (`I am ${this.heroName}`);
}

const hero = {
    heroName: 'Batman',
};

//dialogue.call(hero);
dialogue.apply(hero);
