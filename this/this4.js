function Hero(heroName, realName1) {
    this.realName = realName1;
    this.heroName = heroName;
}

const superman = new Hero("Superman", "Clark Kent");
console.log(superman);